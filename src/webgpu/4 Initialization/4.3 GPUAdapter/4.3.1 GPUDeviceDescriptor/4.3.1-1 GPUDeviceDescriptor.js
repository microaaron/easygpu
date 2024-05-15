/**
 * @file GPUDeviceDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUDeviceDescriptor = class GPUDeviceDescriptor
{
    constructor ( requiredFeatures = [], requiredLimits = {}, defaultQueue = {} )
    {
        this.requiredFeatures = requiredFeatures;//Optional; sequence<GPUFeatureName>; undefined = []
        this.requiredLimits = requiredLimits;//Optional; record<DOMString, GPUSize64>; undefined = {}
        this.defaultQueue = defaultQueue;//Optional; GPUQueueDescriptor; undefined = {}
    }

    setRequiredFeatures ( requiredFeatures ){this.requiredFeatures = requiredFeatures;}

    setRequiredLimits ( requiredLimits ){this.requiredLimits = requiredLimits;}

    setDefaultQueue ( defaultQueue ){this.defaultQueue = defaultQueue;}

    static getAvailableRequiredFeatures (){return new easygpu.webgpu.GPUFeatureName();}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUDeviceDescriptor";
    }
};
easygpu.webgpu.GPUDeviceDescriptor.prototype.getAvailableRequiredFeatures = easygpu.webgpu.GPUDeviceDescriptor.getAvailableRequiredFeatures;