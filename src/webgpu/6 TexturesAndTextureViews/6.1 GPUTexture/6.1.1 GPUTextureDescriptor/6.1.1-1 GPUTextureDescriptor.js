/**
 * @file GPUTextureDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUTextureDescriptor = class GPUTextureDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( size, mipLevelCount, sampleCount, dimension, format, usage, viewFormats = [], label )
    {
        super( label );
        this.size = size; //Required GPUExtent3D
        this.mipLevelCount = mipLevelCount; //Optional; GPUIntegerCoordinate; undefined = 1
        this.sampleCount = sampleCount; //Optional; GPUSize32; undefined = 1
        this.dimension = dimension; //Optional; GPUTextureDimension; undefined = "2d"
        this.format = format; //Required GPUTextureFormat
        this.usage = usage; //Required GPUTextureUsageFlags
        this.viewFormats = viewFormats; //Optional; sequence<GPUTextureFormat>
    }

    setSize ( size )
    {
        this.size = size;
    }

    setMipLevelCount ( mipLevelCount )
    {
        this.mipLevelCount = mipLevelCount;
    }

    setSampleCount ( sampleCount )
    {
        this.sampleCount = sampleCount;
    }

    setDimension ( dimension )
    {
        this.dimension = dimension;
    }

    setFormat ( format )
    {
        this.format = format;
    }

    setUsage ( usage )
    {
        this.usage = usage;
    }

    setViewFormats ( viewFormats )
    {
        this.viewFormats = viewFormats;
    }

    static newSize ( width, height, depthOrArrayLayers )
    {
        return new easygpu.webgpu.GPUExtent3DDict( width, height, depthOrArrayLayers );
    }

    static getAvailableDimensions ()
    {
        return new easygpu.webgpu.GPUTextureDimension();
    }

    static getAvailableFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    static getAvailableUsages ()
    {
        return new easygpu.webgpu.GPUTextureUsage();
    }

    static getAvailableViewFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUTextureDescriptor";
    }
};
easygpu.webgpu.GPUTextureDescriptor.prototype.newSize = easygpu.webgpu.GPUTextureDescriptor.newSize;
easygpu.webgpu.GPUTextureDescriptor.prototype.getAvailableDimensions = easygpu.webgpu.GPUTextureDescriptor.getAvailableDimensions;
easygpu.webgpu.GPUTextureDescriptor.prototype.getAvailableFormats = easygpu.webgpu.GPUTextureDescriptor.getAvailableFormats;
easygpu.webgpu.GPUTextureDescriptor.prototype.getAvailableUsages = easygpu.webgpu.GPUTextureDescriptor.getAvailableUsages;
easygpu.webgpu.GPUTextureDescriptor.prototype.getAvailableViewFormats = easygpu.webgpu.GPUTextureDescriptor.getAvailableViewFormats;