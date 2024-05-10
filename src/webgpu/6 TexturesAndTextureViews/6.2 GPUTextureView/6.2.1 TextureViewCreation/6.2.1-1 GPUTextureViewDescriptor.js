/**
 * @file GPUTextureViewDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUTextureViewDescriptor = class GPUTextureViewDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( format, dimension, aspect, baseMipLevel, mipLevelCount, baseArrayLayer, arrayLayerCount, label )
    {
        super( label );
        this.format = format; //Optional; GPUTextureFormat
        this.dimension = dimension; //Optional; GPUTextureViewDimension
        this.aspect = aspect; //Optional; GPUTextureAspect; undefined = "all"
        this.baseMipLevel = baseMipLevel; //Optional; GPUIntegerCoordinate; undefined = 0
        this.mipLevelCount = mipLevelCount; //Optional; GPUIntegerCoordinate
        this.baseArrayLayer = baseArrayLayer; //Optional; GPUIntegerCoordinate; undefined = 0
        this.arrayLayerCount = arrayLayerCount; //Optional; GPUIntegerCoordinate
    }

    setFormat ( format )
    {
        this.format = format;
    }

    setDimension ( dimension )
    {
        this.dimension = dimension;
    }

    setAspect ( aspect )
    {
        this.aspect = aspect;
    }

    setBaseMipLevel ( baseMipLevel )
    {
        this.baseMipLevel = baseMipLevel;
    }

    setMipLevelCount ( mipLevelCount )
    {
        this.mipLevelCount = mipLevelCount;
    }

    setBaseArrayLayer ( baseArrayLayer )
    {
        this.baseArrayLayer = baseArrayLayer;
    }

    setArrayLayerCount ( arrayLayerCount )
    {
        this.arrayLayerCount = arrayLayerCount;
    }

    static getAvailableFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    static getAvailableDimensions ()
    {
        return new easygpu.webgpu.GPUTextureViewDimension();
    }

    static getAvailableAspects ()
    {
        return new easygpu.webgpu.GPUTextureAspect();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUTextureViewDescriptor";
    }
};
easygpu.webgpu.GPUTextureViewDescriptor.prototype.getAvailableFormats = easygpu.webgpu.GPUTextureViewDescriptor.getAvailableFormats;
easygpu.webgpu.GPUTextureViewDescriptor.prototype.getAvailableDimensions = easygpu.webgpu.GPUTextureViewDescriptor.getAvailableDimensions;
easygpu.webgpu.GPUTextureViewDescriptor.prototype.getAvailableAspects = easygpu.webgpu.GPUTextureViewDescriptor.getAvailableAspects;