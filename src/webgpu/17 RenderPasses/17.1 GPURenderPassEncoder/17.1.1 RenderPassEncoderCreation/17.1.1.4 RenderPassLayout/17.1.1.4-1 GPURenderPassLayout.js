/**
 * @file GPURenderPassLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPURenderPassLayout = class GPURenderPassLayout extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( colorFormats = [], depthStencilFormat, sampleCount, label )
    {
        super( label );
        this.colorFormats = colorFormats; //Required sequence<GPUTextureFormat?>
        this.depthStencilFormat = depthStencilFormat; //Optional; GPUTextureFormat
        this.sampleCount = sampleCount; //Optional; GPUSize32; undefined = 1
    }

    setColorFormats ( colorFormats )
    {
        this.colorFormats = colorFormats;
    }

    setDepthStencilFormat ( depthStencilFormat )
    {
        this.depthStencilFormat = depthStencilFormat;
    }

    setSampleCount ( sampleCount )
    {
        this.sampleCount = sampleCount;
    }

    static getAvailableColorFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    static getAvailableDepthStencilFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPURenderPassLayout";
    }
};
easygpu.webgpu.GPURenderPassLayout.prototype.getAvailableColorFormats = easygpu.webgpu.GPURenderPassLayout.getAvailableColorFormats;
easygpu.webgpu.GPURenderPassLayout.prototype.getAvailableDepthStencilFormats = easygpu.webgpu.GPURenderPassLayout.getAvailableDepthStencilFormats;