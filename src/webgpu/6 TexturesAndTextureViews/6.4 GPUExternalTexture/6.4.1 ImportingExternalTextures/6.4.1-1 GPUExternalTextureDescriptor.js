/**
 * @file GPUExternalTextureDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUExternalTextureDescriptor = class GPUExternalTextureDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( source, colorSpace, label )
    {
        super( label );
        this.source = source; //Required (HTMLVideoElement or VideoFrame);
        this.colorSpace = colorSpace; //Optional; PredefinedColorSpace; undefined = "srgb"
    }

    setSource ( source ){this.source = source;}

    setColorSpace ( colorSpace ){this.colorSpace = colorSpace;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUExternalTextureDescriptor";
    }
};