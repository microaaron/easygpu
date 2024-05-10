/**
 * @file GPUTextureBindingLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUTextureBindingLayout = class GPUTextureBindingLayout
{
    constructor ( sampleType, viewDimension, multisampled )
    {
        this.sampleType = sampleType;//Optional; GPUTextureSampleType; undefined = "float"
        this.viewDimension = viewDimension;//Optional; GPUTextureViewDimension; undefined = "2d"
        this.multisampled = multisampled;//Optional; boolean; undefined = false
    }

    setSampleType ( sampleType )
    {
        this.sampleType = sampleType;
    }

    setViewDimension ( viewDimension )
    {
        this.viewDimension = viewDimension;
    }

    setFalse ( multisampled )
    {
        this.multisampled = multisampled;
    }

    static getAvailableSampleTypes ()
    {
        return new easygpu.webgpu.GPUTextureSampleType();
    }

    static getAvailableViewDimensions ()
    {
        return new easygpu.webgpu.GPUTextureViewDimension();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUTextureBindingLayout";
    }
};
easygpu.webgpu.GPUTextureBindingLayout.prototype.getAvailableSampleTypes = easygpu.webgpu.GPUTextureBindingLayout.getAvailableSampleTypes;
easygpu.webgpu.GPUTextureBindingLayout.prototype.getAvailableViewDimensions = easygpu.webgpu.GPUTextureBindingLayout.getAvailableViewDimensions;