/**
 * @file easygpucore.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.04
 */
var easygpu = {
    webgpu : {},
    wgsl   : {}
};
easygpu.about = {
    version  : "__EASYGPU_VERSION__",
    build    : "__EASYGPU_BUILD__",
    revision : "__EASYGPU_REVISION__",
    date     : "__EASYGPU_DATE__"
};
easygpu.BindingListArray = class BindingListArray extends Array
{
    addBindingList ( bindingList )
    {
        this.push( bindingList );
        return this;
    }

    createShaderModuleBindingCodes ()
    {
        var vertexBindingCode = ``;
        var fragmentBindingCode = ``;
        var computeBindingCode = ``;
        for ( var bindingList of this )
        {
            var groupId = this.indexOf( bindingList );
            for ( var bindingData of bindingList )
            {
                var bindingId = bindingData.entry.binding;
                var declaration = `var`;
                if ( bindingData.entry.buffer )
                {
                    let bufferType = bindingData.entry.buffer.type;
                    bufferType = bufferType ? bufferType : `uniform`;
                    let addressSpace;
                    let accessMode = undefined;
                    switch ( bufferType )
                    {
                        case `uniform`:
                            addressSpace = `uniform`;
                            break;
                        case `storage`:
                            addressSpace = `storage`;
                            accessMode = `read_write`;
                            break;
                        case `read-only-storage`:
                            addressSpace = `storage`;
                            //accessMode = `read`;
                            break;
                    }
                    declaration += `<${addressSpace}${accessMode ? `,${accessMode}` : ``}>`;
                }
                var code = `@group(${groupId}) @binding(${bindingId}) ${declaration} ${bindingData.name}: ${bindingData.wgslType};\n`;
                var visibility = bindingData.entry.visibility;
                if ( visibility & GPUShaderStage.VERTEX ){vertexBindingCode += code;}
                if ( visibility & GPUShaderStage.FRAGMENT ){fragmentBindingCode += code;}
                if ( visibility & GPUShaderStage.COMPUTE ){computeBindingCode += code;}
            }
        }
        return {
            vertexBindingCode   : vertexBindingCode,
            fragmentBindingCode : fragmentBindingCode,
            computeBindingCode  : computeBindingCode
        };
    }

    getBindGroupLayouts ( device )
    {
        if ( !this.bindGroupLayouts )
        {
            this.bindGroupLayouts = [];
            for ( var bindingList of this )
            {
                this.bindGroupLayouts.push( bindingList.getBindGroupLayout( device ) );
            }
        }
        return this.bindGroupLayouts;
    }

    static newBindingParamsList ()
    {
        return new BindingListArray.BindingParamsList();
    }

    static BindingParamsList = class BindingParamsList extends Array
    {
        addBindingParams ( name, wgslType, visibility, resourceLayoutObject )
        {
            this.push( {
                name                 : name,
                wgslType             : wgslType,
                visibility           : visibility,
                resourceLayoutObject : resourceLayoutObject
            } );
            return this;
        }

        createBindingList ()
        {
            var bindingList = new class BindingList extends Array
            {
                createBindGroupLayout ( device )
                {
                    return this.bindGroupLayout = device.createBindGroupLayout( this.bindGroupLayoutDescriptor );
                }

                getBindGroupLayout ( device )
                {
                    return this.bindGroupLayout ? this.bindGroupLayout : this.createBindGroupLayout( device );
                }
            }();
            var bindGroupLayoutDescriptor = new easygpu.webgpu.GPUBindGroupLayoutDescriptor();

            for ( var bindingParams of this )
            {
                var entry = bindGroupLayoutDescriptor.newEntry( bindGroupLayoutDescriptor.entries.length, bindingParams.visibility, bindingParams.resourceLayoutObject );
                bindGroupLayoutDescriptor.entries.push( entry );
                bindingList.push( new class BindingData
                {
                    name = bindingParams.name;

                    wgslType = bindingParams.wgslType;

                    entry = entry;
                }() );
            }

            bindingList.bindGroupLayoutDescriptor = bindGroupLayoutDescriptor;
            return bindingList;
        }
    };
};
easygpu.BindingListArray.prototype.newBindingParamsList = easygpu.BindingListArray.newBindingParamsList;
easygpu.VertexListArray = class VertexListArray extends Array
{
    addVertexList ( vertexList )
    {
        this.push( vertexList );
        return this;
    }

    createVertexBufferLayouts ()
    {
        this.vertexBufferLayouts = new class VertexBufferLayouts extends Array{}();
        var shaderLocation = 0;
        for ( var vertexList of this )
        {
            for ( var attribute of vertexList.vertexBufferLayout.attributes )
            {
                attribute.shaderLocation = shaderLocation;
                shaderLocation++;
            }
            this.vertexBufferLayouts.push( vertexList.vertexBufferLayout );
        }
        return this.vertexBufferLayouts;
    }

    createShaderModuleVertexInputCode ()
    {
        if ( !this.vertexBufferLayouts )
        {
            this.createVertexBufferLayouts();
        }
        var vertexInputCodes = [];
        for ( var vertexList of this )
        {
            for ( var vertex of vertexList )
            {
                vertexInputCodes.push( `@location(${vertex.vertexAttribute.shaderLocation}) ${vertex.name}: ${vertex.wgslType}` );
            }
        }
        return vertexInputCodes.join();
    }

    static newVertexParamsList ()
    {
        return new VertexListArray.VertexParamsList();
    }

    static VertexParamsList = class extends Array
    {
        addVertexParams ( name, wgslType, format, offset/*(Optional)*/ )
        {
            this.push( {
                name     : name,
                wgslType : wgslType,
                format   : format,
                offset   : offset
            } );
            return this;
        }

        createVertexList ( arrayStride/*(Optional)*/, stepMode/*(Optional)*/ )
        {
            var vertexList = new class VertexList extends Array{}();
            var vertexBufferLayout = new easygpu.webgpu.GPUVertexBufferLayout( arrayStride, stepMode );
            var autoArrayStride = 0;
            var vertexFormats = new easygpu.webgpu.GPUVertexFormat();
            class VertexData
            {
                constructor ( name, wgslType, vertexAttribute )
                {
                    this.name = name;
                    this.wgslType = wgslType;
                    this.vertexAttribute = vertexAttribute;
                }
            }
            for ( var vertexParams of this )
            {
                if ( Number.isInteger( vertexParams.offset ) )
                {
                    var format = vertexParams.format;
                    var offset = vertexParams.offset;
                    var byteSize = vertexFormats.byteSizeOf( format );
                    var vertexAttribute = new easygpu.webgpu.GPUVertexAttribute( format, offset );
                    vertexBufferLayout.attributes.push( vertexAttribute );
                    vertexList.push( new VertexData( vertexParams.name, vertexParams.wgslType, vertexAttribute ) );
                    autoArrayStride = ( autoArrayStride > offset ? autoArrayStride : offset ) + byteSize;
                }
            }
            for ( var vertexParams of this )
            {
                if ( !Number.isInteger( vertexParams.offset ) )
                {
                    var format = vertexParams.format;
                    var offset = autoArrayStride;
                    var byteSize = vertexFormats.byteSizeOf( format );
                    var vertexAttribute = new easygpu.webgpu.GPUVertexAttribute( format, offset );
                    vertexBufferLayout.attributes.push( vertexAttribute );
                    vertexList.push( new VertexData( vertexParams.name, vertexParams.wgslType, vertexAttribute ) );
                    autoArrayStride += byteSize;
                }
            }
            vertexBufferLayout.setArrayStride( Number.isInteger( arrayStride ) ? ( arrayStride ? arrayStride : autoArrayStride ) : autoArrayStride );
            vertexList.vertexBufferLayout = vertexBufferLayout;
            return vertexList;
        }
    };
};
easygpu.VertexListArray.prototype.newVertexParamsList = easygpu.VertexListArray.newVertexParamsList;
easygpu.ShaderModuleInputOutputList = class ShaderModuleInputOutputList extends Array
{
    add ( name, wgslType )
    {
        this.push( {
            name     : name,
            wgslType : wgslType
        } );
        return this;
    }

    createShaderModuleInputOutputCode ()
    {
        var location = 0;
        var inputOutputCodes = [];
        for ( var inputOutput of this )
        {
            inputOutputCodes.push( `@location(${location}) ${inputOutput.name}: ${inputOutput.wgslType}` );
            location++;
        }
        return inputOutputCodes.join();
    }
};
easygpu.PassEncoderResource = class PassEncoderResource
{
    constructor ( arg0, arg1 )
    {
        if ( arg0 instanceof GPUDevice )
        {
            this.bindingListArray;
            this.bindGroupDescriptors = [];
            this.bindGroupResources = {};
            this.bindGroups = [];
            this.assets = {};
            Object.defineProperty( this, `device`, {
                get : function ()
                {
                    return arg0;
                },
                enumerable   : true,
                configurable : true
            } );
        }
        else if ( arg0 instanceof PassEncoderResource )
        {
            return arg0.copy( arg1 );
        }
    }

    initBindGroupDescriptor ( bindingList, resources/*(Optional)*/ )
    {
        const device = this.device;
        let updated = true;
        let bindGroup;
        const layout = bindingList.getBindGroupLayout( device );
        const entries = [];
        const label = undefined;
        const bindGroupDescriptor = new class extends easygpu.webgpu.GPUBindGroupDescriptor
        {
            update ()
            {
                updated = true;
            }

            /*setUpdated ( value )
            {
                updated = value ? true : false;
            }*/

            isUpdated ()
            {
                return updated;
            }

            getBindGroup ()
            {
                if ( updated )
                {
                    bindGroup = device.createBindGroup( this );
                    updated = false;
                }
                return bindGroup;
            }

            getResources ()
            {
                resources = [];
                for ( const entry of entries )
                {
                    if ( entry && entry.resource )
                    {
                        resources[ entry.binding ] = entry.resource;
                    }
                }
                return resources;
            }

            initEntry ( passEncoderResource, bindingData, resources = {} )
            {
                const device = passEncoderResource.device;
                const binding = bindingData.entry.binding;
                let resource;
                if ( resources[ bindingData.name ] )
                {
                    resource = resources[ bindingData.name ];
                }
                else if ( resources[ binding ] )
                {
                    resource = resources[ binding ];
                }
                else
                {
                    if ( bindingData.entry.buffer )
                    {
                        let size = easygpu.wgsl.sizeOf( bindingData.wgslType );
                        let usage = GPUBufferUsage.COPY_DST;
                        switch ( bindingData.entry.buffer.type )
                        {
                            case `storage`:
                                usage |= GPUBufferUsage.SRC;
                            case `read-only-storage`:
                                usage |= GPUBufferUsage.STORAGE;
                                break;
                            case `uniform`:
                            case undefined:
                                usage |= GPUBufferUsage.UNIFORM;
                                break;
                        }
                        const mappedAtCreation = false;
                        const label = bindingData.name;
                        const bufferDescriptor = new easygpu.webgpu.GPUBufferDescriptor( size, usage, mappedAtCreation, label );
                        const buffer = device.createBuffer( bufferDescriptor );
                        const offset = undefined;
                        size = undefined;
                        resource = new easygpu.webgpu.GPUBufferBinding( buffer, offset, size );
                    }
                }
                const entry = easygpu.webgpu.GPUBindGroupDescriptor.newEntry( binding, resource );
                this.entries[ binding ] = entry;
                //set properties
                if ( bindingData.entry.buffer )
                {
                    if ( resource.buffer instanceof GPUBuffer )
                    {
                        const typedArray = ( function getTypedArray ( hostShareableType )
                        {
                            var match;
                            switch ( true )
                            {
                                case /^f16$/.test( hostShareableType ):
                                    return ;//not supported
                                    break;
                                case /^i32$/.test( hostShareableType ):
                                    return Int32Array;
                                    break;
                                case /^u32$/.test( hostShareableType ):
                                    return Uint32Array;
                                    break;
                                case /^f32$/.test( hostShareableType ):
                                    return Float32Array;
                                    break;
                                case ( match = hostShareableType.match( /^atomic<(.*)>$/ ) ) ? true : false:
                                    return getTypedArray( match[ 1 ] );
                                    break;
                                case ( match = hostShareableType.match( /^vec\d+(.*)$/ ) ) ? true : false:
                                    var T = match[ 1 ];//<type>
                                    switch ( true )
                                    {
                                        case ( match = T.match( /^<(.*)>$/ ) ) ? true : false:
                                            return getTypedArray( match[ 1 ] );
                                            break;
                                        case /^h$/.test( T ):
                                            return getTypedArray( `f16` );
                                            break;
                                        case /^i$/.test( T ):
                                            return getTypedArray( `i32` );
                                            break;
                                        case /^u$/.test( T ):
                                            return getTypedArray( `u32` );
                                            break;
                                        case /^f$/.test( T ):
                                            return getTypedArray( `f32` );
                                            break;
                                        default:
                                            return;
                                            break;
                                    }
                                case ( match = hostShareableType.match( /^mat\d+x(\d+)(.*)$/ ) ) ? true : false:
                                    var R = Number( match[ 1 ] );//rows
                                    var T = match[ 2 ];//<type>
                                    return getTypedArray( `vec${R}${T}` );
                                    break;
                                case ( match = hostShareableType.match( /^array<(.*),\d+>$/ ) ) ? true : false:
                                case ( match = hostShareableType.match( /^array<(.*)(?<!,\d+)>$/ ) ) ? true : false:
                                    var E = match[ 1 ];//element
                                    return getTypedArray( E );
                                    break;
                                default:
                                    return;
                                    break;
                            }
                        } )( bindingData.wgslType );
                        Object.defineProperty( passEncoderResource.bindGroupResources, bindingData.name, {
                            get : function ()
                            {
                                return entry.resource.buffer;
                            },
                            set : function ( value )
                            {
                                let view;
                                if ( ArrayBuffer.isView( value ) )
                                {
                                    view = value;
                                }
                                else if ( value instanceof ArrayBuffer )
                                {
                                    view = new DataView( value );
                                }
                                else if ( typedArray )
                                {
                                    if ( typeof value === `number` || value instanceof Number )
                                    {
                                        view = new typedArray( [ value ] );
                                    }
                                    else if ( value instanceof Array )
                                    {
                                        view = new typedArray( value );
                                    }
                                    else
                                    {
                                        return;//unknow value;
                                    }
                                }
                                else
                                {
                                    return;//unknow type;
                                }
                                if ( view.byteLength != entry.resource.buffer.size )
                                {
                                    entry.resource.buffer.destroy();
                                    entry.resource.setBuffer( device.createBuffer( new easygpu.webgpu.GPUBufferDescriptor( view.byteLength, entry.resource.buffer.usage, false, entry.resource.buffer.label ) ) );
                                    //resource.setOffset(0);
                                    //resource.setSize(view.byteLength);
                                    updated = true;
                                }
                                device.queue.writeBuffer( entry.resource.buffer, 0, view.buffer, view.byteOffset, view.byteLength );
                            },
                            enumerable   : true,
                            configurable : true
                        } );
                    }
                    else
                    {
                        //resource error
                    }
                }
                else if ( bindingData.entry.sampler )
                {
                    Object.defineProperty( passEncoderResource.bindGroupResources, bindingData.name, {
                        get : function ()
                        {
                            return entry.resource;
                        },
                        set : function ( value )
                        {
                            switch ( true )
                            {
                                case value instanceof GPUSampler:
                                    entry.setResource( value );
                                    updated = true;
                                    break;
                                default:
                                    entry.setResource( device.createSampler( value ) );
                                    updated = true;
                                    break;
                            }
                        },
                        enumerable   : true,
                        configurable : true
                    } );
                }
                else if ( bindingData.entry.texture || bindingData.entry.storageTexture )
                {
                    Object.defineProperty( passEncoderResource.bindGroupResources, bindingData.name, {
                        get : function ()
                        {
                            return entry.resource;
                        },
                        set : function ( value )
                        {
                            switch ( true )
                            {
                                case value instanceof GPUTextureView:
                                    entry.setResource( value );
                                    updated = true;
                                    break;
                                case value instanceof GPUTexture:
                                    entry.setResource( value.createView() );
                                    updated = true;
                                    break;
                            }
                        },
                        enumerable   : true,
                        configurable : true
                    } );
                }
                else if ( bindingData.entry.externalTexture )
                {
                    Object.defineProperty( passEncoderResource.bindGroupResources, bindingData.name, {
                        get : function ()
                        {
                            return entry.resource;
                        },
                        set : function ( value )
                        {
                            switch ( true )
                            {
                                case value instanceof GPUExternalTexture:
                                    entry.setResource( value );
                                    updated = true;
                                    break;
                            }
                        },
                        enumerable   : true,
                        configurable : true
                    } );
                }
                updated = true;
            }

            initEntries ( passEncoderResource, bindingList, resources )
            {
                for ( const bindingData of bindingList )
                {
                    if ( bindingData )
                    {
                        this.initEntry( passEncoderResource, bindingData, resources );
                    }
                }
            }
        }( layout, entries, label );
        bindGroupDescriptor.initEntries( this, bindingList, resources );
        return bindGroupDescriptor;
    }

    initBindGroupByDescriptor ( index, bindGroupDescriptor )
    {
        Object.defineProperty( this.bindGroups, index, {
            get : function ()
            {
                return bindGroupDescriptor.getBindGroup();
            },
            enumerable   : true,
            configurable : true
        } );
    }

    initBindGroup ( index, bindingList, resources )
    {
        const bindGroupDescriptor = this.initBindGroupDescriptor( bindingList, resources );
        this.bindGroupDescriptors[ index ] = bindGroupDescriptor;
        this.initBindGroupByDescriptor( index, bindGroupDescriptor );
    }

    initBindGroups ( bindingListArray = this.bindingListArray, resourcesArray = [] )
    {
        for ( const bindingList of bindingListArray )
        {
            if ( bindingList )
            {
                const index = bindingListArray.indexOf( bindingList );
                //const bindGroupDescriptor = this.initBindGroupDescriptor( bindingList, resourcesArray[ index ] );
                //this.bindGroupDescriptors[ index ] = bindGroupDescriptor;
                //this.initBindGroup( index, bindGroupDescriptor );
                this.initBindGroup( index, bindingList, resourcesArray[ index ] );
            }
        }
    }

    copyBindGroupResourcesPropertyFromPassEncoderResource ( passEncoderResource, name )
    {
        Object.defineProperty( this.bindGroupResources, name, Object.getOwnPropertyDescriptor( passEncoderResource.bindGroupResources, name ) );
    }

    copy ( override )
    {
        let overridePropertyDescriptors;
        if ( override instanceof Object )
        {
            overridePropertyDescriptors = Object.getOwnPropertyDescriptors( override );
        }
        return Object.defineProperties( new this.constructor(), Object.assign( Object.getOwnPropertyDescriptors( this ), overridePropertyDescriptors ) );
    }
};
easygpu.ComputePassEncoderResource = class ComputePassEncoderResource extends easygpu.PassEncoderResource
{
    constructor ( arg0, arg1 )
    {
        super( arg0, arg1 );
    }
};
easygpu.RenderPassEncoderResource = class RenderPassEncoderResource extends easygpu.PassEncoderResource
{
    constructor ( arg0, arg1 )
    {
        super( arg0, arg1 );
        if ( arg0 instanceof GPUDevice )
        {
            this.vertexListArray;
            this.vertices = {};
            this.vertexBuffers = [];
        }
    }

    initRenderPipeline ( renderPipelineDescriptor = new easygpu.webgpu.GPURenderPipelineDescriptor() )
    {
        let renderPipeline;
        let updated = true;
        Object.defineProperty( this, `renderPipelineDescriptor`, {
            get : function ()
            {
                return renderPipelineDescriptor;
            },
            set : function ( descriptor )
            {
                renderPipelineDescriptor = descriptor;
                updated = true;
            },
            enumerable   : true,
            configurable : true
        } );
        Object.defineProperty( this, `renderPipeline`, {
            get : function ()
            {
                if ( updated )
                {
                    renderPipeline = this.device.createRenderPipeline( renderPipelineDescriptor );
                    updated = false;
                }
                return renderPipeline;
            },
            enumerable   : true,
            configurable : true
        } );
    }

    initVertexBuffer ( index, vertexList )
    {
        const device = this.device;
        const vertexNames = [];
        for ( const vertexData of vertexList )
        {
            vertexNames.push( vertexData.name );
        }
        let vertexBuffer;
        const vertexBufferName = vertexNames.join( `_` );
        Object.defineProperty( this.vertices, vertexBufferName, {
            get : function ()
            {
                return vertexBuffer;
            },
            set : function ( value )
            {
                let view;
                if ( ArrayBuffer.isView( value ) )
                {
                    view = value;
                }
                else if ( value instanceof ArrayBuffer )
                {
                    view = new DataView( value );
                }
                else if ( value instanceof GPUBuffer )
                {
                    if ( vertexBuffer instanceof GPUBuffer )
                    {
                        vertexBuffer.destroy();
                    }
                    vertexBuffer = value;
                    return;
                }
                else
                {
                    return;//unknow type;
                }
                switch ( true )
                {
                    case vertexBuffer instanceof GPUBuffer && view.byteLength != vertexBuffer.size:
                        vertexBuffer.destroy();
                    case !( vertexBuffer instanceof GPUBuffer ):
                        const size = view.byteLength;
                        const usage = GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST;
                        const mappedAtCreation = false;
                        const label = vertexBufferName;
                        const bufferDescriptor = new easygpu.webgpu.GPUBufferDescriptor( size, usage, mappedAtCreation, label );
                        vertexBuffer = device.createBuffer( bufferDescriptor );
                    default:
                        device.queue.writeBuffer( vertexBuffer, 0, view.buffer, view.byteOffset, view.byteLength );
                        break;
                }
            },
            enumerable   : true,
            configurable : true
        } );
        Object.defineProperty( this.vertexBuffers, index, {
            get : function ()
            {
                return vertexBuffer;
            },
            enumerable   : true,
            configurable : true
        } );
    }

    initVertexBuffers ( vertexListArray = this.vertexListArray )
    {
        for ( const vertexList of vertexListArray )
        {
            if ( vertexList )
            {
                this.initVertexBuffer( vertexListArray.indexOf( vertexList ), vertexList );
            }
        }
    }

    initIndexBuffer ()
    {
        const device = this.device;
        let indexBuffer;
        Object.defineProperty( this, `indexBuffer`, {
            get : function ()
            {
                return indexBuffer;
            },
            set : function ( value )
            {
                switch ( true )
                {
                    case value instanceof Uint16Array:
                        this.indexFormat = `uint16`;
                        break;
                    case value instanceof Uint32Array:
                        this.indexFormat = `uint32`;
                        break;
                    case value instanceof Array:
                        value = new Uint32Array( value );
                        this.indexFormat = `uint32`;
                        break;
                    case typeof value === `number` || value instanceof Number:
                        value = new Uint32Array( [ value ] );
                        this.indexFormat = `uint32`;
                        break;
                    case value instanceof GPUBuffer://You need to set indexFormat manually
                        if ( indexBuffer instanceof GPUBuffer )
                        {
                            indexBuffer.destroy();
                        }
                        indexBuffer = value;
                        return;
                        break;
                    default:
                        //unknow value
                        return;
                        break;
                }
                switch ( true )
                {
                    case indexBuffer instanceof GPUBuffer && value.byteLength != indexBuffer.size:
                        indexBuffer.destroy();
                    case !( indexBuffer instanceof GPUBuffer ):
                        const size = value.byteLength;
                        const usage = GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST;
                        const mappedAtCreation = false;
                        let label;
                        const bufferDescriptor = new easygpu.webgpu.GPUBufferDescriptor( size, usage, mappedAtCreation, label );
                        indexBuffer = device.createBuffer( bufferDescriptor );
                    default:
                        device.queue.writeBuffer( indexBuffer, 0, value.buffer, value.byteOffset, value.byteLength );
                        break;
                }
            },
            enumerable   : true,
            configurable : true
        } );
    }
};