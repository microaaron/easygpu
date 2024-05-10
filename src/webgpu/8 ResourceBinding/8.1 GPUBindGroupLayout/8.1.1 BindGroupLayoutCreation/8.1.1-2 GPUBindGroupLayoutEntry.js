/**
 * @file GPUBindGroupLayoutEntry.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBindGroupLayoutEntry = class GPUBindGroupLayoutEntry
{
    constructor ( binding, visibility, resourceLayoutObject )
    {
        this.binding = binding; //Required GPUIndex32
        this.visibility = visibility; //Required GPUShaderStageFlag(s)
        //An object that defines the required binding resource type and structure of the GPUBindGroup entry corresponding to this entry. This property can be one of buffer, externalTexture, sampler, storageTexture, or texture.
        if ( resourceLayoutObject instanceof easygpu.webgpu.GPUBufferBindingLayout )
        {
            this.buffer = resourceLayoutObject;
        }
        else if ( resourceLayoutObject instanceof easygpu.webgpu.GPUSamplerBindingLayout )
        {
            this.sampler = resourceLayoutObject;
        }
        else if ( resourceLayoutObject instanceof easygpu.webgpu.GPUTextureBindingLayout )
        {
            this.texture = resourceLayoutObject;
        }
        else if ( resourceLayoutObject instanceof easygpu.webgpu.GPUStorageTextureBindingLayout )
        {
            this.storageTexture = resourceLayoutObject;
        }
        else if ( resourceLayoutObject instanceof easygpu.webgpu.GPUExternalTextureBindingLayout )
        {
            this.externalTexture = resourceLayoutObject;
        }
        //e.g. {buffer:{...}}
        else if ( resourceLayoutObject instanceof Object )
        {
            if ( resourceLayoutObject.buffer instanceof Object )
            {
                this.buffer = resourceLayoutObject.buffer;
            }
            else if ( resourceLayoutObject.sampler instanceof Object )
            {
                this.sampler = resourceLayoutObject.sampler;
            }
            else if ( resourceLayoutObject.texture instanceof Object )
            {
                this.texture = resourceLayoutObject.texture;
            }
            else if ( resourceLayoutObject.storageTexture instanceof Object )
            {
                this.storageTexture = resourceLayoutObject.storageTexture;
            }
            else if ( resourceLayoutObject.externalTexture instanceof Object )
            {
                this.externalTexture = resourceLayoutObject.externalTexture;
            }
            else
            {
                //x3dom.debug.logWarning('unknown resourceLayoutObject')
                console.warn( "unknown resourceLayoutObject" );
            }
        }
        else
        {
            //x3dom.debug.logWarning('unknown resourceLayoutObject')
            console.warn( "unknown resourceLayoutObject" );
        }
    }

    setBinding ( binding )
    {
        this.deleteResourceLayoutObject();
        this.binding = binding;
    }

    setVisibility ( visibility )
    {
        this.deleteResourceLayoutObject();
        this.visibility = visibility;
    }

    setBuffer ( buffer )
    {
        this.deleteResourceLayoutObject();
        this.buffer = buffer;
    }

    setSampler ( sampler )
    {
        this.deleteResourceLayoutObject();
        this.sampler = sampler;
    }

    setTexture ( texture )
    {
        this.deleteResourceLayoutObject();
        this.texture = texture;
    }

    setStorageTexture ( storageTexture )
    {
        this.deleteResourceLayoutObject();
        this.storageTexture = storageTexture;
    }

    setExternalTexture ( externalTexture )
    {
        this.deleteResourceLayoutObject();
        this.externalTexture = externalTexture;
    }

    deleteResourceLayoutObject ()
    {
        delete this.buffer;
        delete this.sampler;
        delete this.texture;
        delete this.storageTexture;
        delete this.externalTexture;
    }

    static newBuffer ( type, hasDynamicOffset, minBindingSize )
    {
        return new easygpu.webgpu.GPUBufferBindingLayout( type, hasDynamicOffset, minBindingSize );
    }

    static newSampler ( type )
    {
        return new easygpu.webgpu.GPUSamplerBindingLayout( type );
    }

    static newTexture ( sampleType, viewDimension, multisampled )
    {
        return new easygpu.webgpu.GPUTextureBindingLayout( sampleType, viewDimension, multisampled );
    }

    static newStorageTexture ( access, format, viewDimension )
    {
        return new easygpu.webgpu.GPUStorageTextureBindingLayout( access, format, viewDimension );
    }

    static newExternalTexture ()
    {
        return new easygpu.webgpu.GPUExternalTextureBindingLayout();
    }

    static getAvailableVisibilities ()
    {
        return new easygpu.webgpu.GPUShaderStage();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBindGroupLayoutEntry";
    }
};
easygpu.webgpu.GPUBindGroupLayoutEntry.prototype.newBuffer = easygpu.webgpu.GPUBindGroupLayoutEntry.newBuffer;
easygpu.webgpu.GPUBindGroupLayoutEntry.prototype.newSampler = easygpu.webgpu.GPUBindGroupLayoutEntry.newSampler;
easygpu.webgpu.GPUBindGroupLayoutEntry.prototype.newTexture = easygpu.webgpu.GPUBindGroupLayoutEntry.newTexture;
easygpu.webgpu.GPUBindGroupLayoutEntry.prototype.newStorageTexture = easygpu.webgpu.GPUBindGroupLayoutEntry.newStorageTexture;
easygpu.webgpu.GPUBindGroupLayoutEntry.prototype.newExternalTexture = easygpu.webgpu.GPUBindGroupLayoutEntry.newExternalTexture;
easygpu.webgpu.GPUBindGroupLayoutEntry.prototype.getAvailableVisibilities = easygpu.webgpu.GPUBindGroupLayoutEntry.getAvailableVisibilities;