/**
 * @file GPUCanvasConfiguration.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUCanvasConfiguration = class GPUCanvasConfiguration
{
    constructor ( device, format, usage, viewFormats, colorSpace, alphaMode )
    {
        this.device = device;//Required GPUDevice
        this.format = format;//Required GPUTextureFormat
        this.usage = usage;//Optional; GPUTextureUsageFlags; undefined = 0x10(GPUTextureUsage.RENDER_ATTACHMENT)
        this.viewFormats = viewFormats;//Optional; sequence<GPUTextureFormat>; undefined = [];
        this.colorSpace = colorSpace;//Optional; PredefinedColorSpace; undefined = "srgb"
        this.alphaMode = alphaMode;//Optional; GPUCanvasAlphaMode; undefined = "opaque";
    }

    setDevice ( device ){this.device = device;}

    setFormat ( format ){this.format = format;}

    setUsage ( usage ){this.usage = usage;}

    setViewFormats ( viewFormats ){this.viewFormats = viewFormats;}

    setColorSpace ( colorSpace ){this.colorSpace = colorSpace;}

    setAlphaMode ( alphaMode ){this.alphaMode = alphaMode;}

    static getAvailableFormats (){return new easygpu.webgpu.GPUTextureFormat();}

    static getAvailableUsages (){return new easygpu.webgpu.GPUTextureUsageFlags();}

    static getAvailableViewFormats (){return new easygpu.webgpu.GPUTextureFormat();}

    static getAvailableAlphaModes (){return new easygpu.webgpu.GPUCanvasAlphaMode();}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUCanvasConfiguration";
    }
};
easygpu.webgpu.GPUCanvasConfiguration.prototype.getAvailableFormats = easygpu.webgpu.GPUCanvasConfiguration.getAvailableFormats;
easygpu.webgpu.GPUCanvasConfiguration.prototype.getAvailableUsages = easygpu.webgpu.GPUCanvasConfiguration.getAvailableUsages;
easygpu.webgpu.GPUCanvasConfiguration.prototype.getAvailableViewFormats = easygpu.webgpu.GPUCanvasConfiguration.getAvailableViewFormats;
easygpu.webgpu.GPUCanvasConfiguration.prototype.getAvailableAlphaModes = easygpu.webgpu.GPUCanvasConfiguration.getAvailableAlphaModes;