/**
 * @file GPUStencilFaceState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUStencilFaceState = class GPUStencilFaceState
{
    constructor ( compare, failOp, depthFailOp, passOp )
    {
        this.compare = compare;//Optional
        this.failOp = failOp;//Optional
        this.depthFailOp = depthFailOp;//Optional
        this.passOp = passOp;//Optional
    }

    setCompare ( compare )
    {
        this.compare = compare;
    }

    setFailOp ( failOp )
    {
        this.failOp = failOp;
    }

    setDepthFailOp ( depthFailOp )
    {
        this.depthFailOp = depthFailOp;
    }

    setPassOp ( passOp )
    {
        this.passOp = passOp;
    }

    static getAvailableCompares ()
    {
        return new easygpu.webgpu.GPUCompareFunction();
    }

    static getAvailableFailOps ()
    {
        return new easygpu.webgpu.GPUStencilOperation();
    }

    static getAvailableDepthFailOps ()
    {
        return new easygpu.webgpu.GPUStencilOperation();
    }

    static getAvailablePassOps ()
    {
        return new easygpu.webgpu.GPUStencilOperation();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUStencilFaceState";
    }
};
easygpu.webgpu.GPUStencilFaceState.prototype.getAvailableCompares = easygpu.webgpu.GPUStencilFaceState.getAvailableCompares;
easygpu.webgpu.GPUStencilFaceState.prototype.getAvailableFailOps = easygpu.webgpu.GPUStencilFaceState.getAvailableFailOps;
easygpu.webgpu.GPUStencilFaceState.prototype.getAvailableDepthFailOps = easygpu.webgpu.GPUStencilFaceState.getAvailableDepthFailOps;
easygpu.webgpu.GPUStencilFaceState.prototype.getAvailablePassOps = easygpu.webgpu.GPUStencilFaceState.getAvailablePassOps;