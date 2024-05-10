/**
 * @file GPUBlendComponent.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUBlendComponent = class GPUBlendComponent
{
    constructor ( operation, srcFactor, dstFactor )
    {
        this.operation = operation; //Optional
        this.srcFactor = srcFactor; //Optional
        this.dstFactor = dstFactor; //Optional
    }

    setOperation ( operation )
    {
        this.operation = operation;
    }

    setSrcFactor ( srcFactor )
    {
        this.srcFactor = srcFactor;
    }

    setDstFactor ( dstFactor )
    {
        this.dstFactor = dstFactor;
    }

    static getAvailableOperations ()
    {
        return new easygpu.webgpu.GPUBlendOperation();
    }

    static getAvailableSrcFactors ()
    {
        return new easygpu.webgpu.GPUBlendFactor();
    }

    static getAvailableDstFactors ()
    {
        return new easygpu.webgpu.GPUBlendFactor();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBlendComponent";
    }
};
easygpu.webgpu.GPUBlendComponent.prototype.getAvailableOperations = easygpu.webgpu.GPUBlendComponent.getAvailableOperations;
easygpu.webgpu.GPUBlendComponent.prototype.getAvailableSrcFactors = easygpu.webgpu.GPUBlendComponent.getAvailableSrcFactors;
easygpu.webgpu.GPUBlendComponent.prototype.getAvailableDstFactors = easygpu.webgpu.GPUBlendComponent.getAvailableDstFactors;