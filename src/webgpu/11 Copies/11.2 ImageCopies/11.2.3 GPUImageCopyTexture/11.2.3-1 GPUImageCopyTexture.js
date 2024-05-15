/**
 * @file GPUImageCopyTexture.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUImageCopyTexture = class GPUImageCopyTexture
{
    constructor ( texture, mipLevel, origin = {}, aspect )
    {
        this.texture = texture;//Required GPUTexture
        this.mipLevel = mipLevel;//Optional; GPUIntegerCoordinate; undefined = 0
        this.origin = origin;//Optional; GPUOrigin3D; undefined = {}
        this.aspect = aspect;//Optional; GPUTextureAspect; undefined = "all"
    }

    setTexture ( texture ){this.texture = texture;}

    setMipLevel ( mipLevel ){this.mipLevel = mipLevel;}

    setOrigin ( origin ){this.origin = origin;}

    setAspect ( aspect ){this.aspect = aspect;}

    static getAvailableAspects (){return new easygpu.webgpu.GPUTextureAspect();}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUImageCopyTexture";
    }
};
easygpu.webgpu.GPUImageCopyTexture.prototype.getAvailableAspects = easygpu.webgpu.GPUImageCopyTexture.getAvailableAspects;