/**
 * @file GPURenderPassColorAttachment.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPURenderPassColorAttachment = class GPURenderPassColorAttachment
{
    constructor ( view, depthSlice, resolveTarget, clearValue, loadOp, storeOp )
    {
        this.view = view; //Required GPUTextureView
        this.depthSlice = depthSlice; //GPUIntegerCoordinate
        this.resolveTarget = resolveTarget; //Optional; GPUTextureView
        this.clearValue = clearValue; //Optional; GPUColor; default = {r: 0, g: 0, b: 0, a: 0}
        this.loadOp = loadOp; //Required GPULoadOp
        this.storeOp = storeOp; //Required GPUStoreOp
    }

    setView ( view )
    {
        this.view = view;
    }

    setDepthSlice ( depthSlice )
    {
        this.depthSlice = depthSlice;
    }

    setResolveTarget ( resolveTarget )
    {
        this.resolveTarget = resolveTarget;
    }

    setClearValue ( clearValue )
    {
        this.clearValue = clearValue;
    }

    setLoadOp ( loadOp )
    {
        this.loadOp = loadOp;
    }

    setStoreOp ( storeOp )
    {
        this.storeOp = storeOp;
    }

    static newClearValue ( r, g, b, a )
    {
        return new easygpu.webgpu.GPUColorDict( r, g, b, a );
    }

    static getAvailableLoadOps ()
    {
        return new easygpu.webgpu.GPULoadOp();
    }

    static getAvailableStoreOps ()
    {
        return new easygpu.webgpu.GPUStoreOp();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPURenderPassColorAttachment";
    }
};
easygpu.webgpu.GPURenderPassColorAttachment.prototype.newClearValue = easygpu.webgpu.GPURenderPassColorAttachment.newClearValue;
easygpu.webgpu.GPURenderPassColorAttachment.prototype.getAvailableLoadOps = easygpu.webgpu.GPURenderPassColorAttachment.getAvailableLoadOps;
easygpu.webgpu.GPURenderPassColorAttachment.prototype.getAvailableStoreOps = easygpu.webgpu.GPURenderPassColorAttachment.getAvailableStoreOps;