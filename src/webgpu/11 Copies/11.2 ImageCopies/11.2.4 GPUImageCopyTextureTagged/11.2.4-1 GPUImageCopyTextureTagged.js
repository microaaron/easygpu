/**
 * @file GPUImageCopyTextureTagged.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUImageCopyTextureTagged = class GPUImageCopyTextureTagged extends easygpu.webgpu.GPUImageCopyTexture
{
    constructor ( texture, mipLevel, origin = {}, aspect, colorSpace, premultipliedAlpha )
    {
        super( texture, mipLevel, origin = {}, aspect );
        this.colorSpace = colorSpace;//Optional; PredefinedColorSpace; undefined = "srgb"
        this.premultipliedAlpha = premultipliedAlpha;//Optional; boolean; undefined = false
    }

    setColorSpace ( colorSpace ){this.colorSpace = colorSpace;}

    setPremultipliedAlpha ( premultipliedAlpha ){this.premultipliedAlpha = premultipliedAlpha;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUImageCopyTextureTagged";
    }
};