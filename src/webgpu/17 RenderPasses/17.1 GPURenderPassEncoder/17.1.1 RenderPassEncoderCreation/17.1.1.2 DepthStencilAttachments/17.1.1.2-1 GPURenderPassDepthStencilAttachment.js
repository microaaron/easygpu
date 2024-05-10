/**
 * @file GPURenderPassDepthStencilAttachment.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPURenderPassDepthStencilAttachment = class GPURenderPassDepthStencilAttachment
{
    constructor ( view, depthClearValue, depthLoadOp, depthStoreOp, depthReadOnly, stencilClearValue, stencilLoadOp, stencilStoreOp, stencilReadOnly )
    {
        this.view = view; //Required GPUTextureView;
        this.depthClearValue = depthClearValue; //Optional; float
        this.depthLoadOp = depthLoadOp; //Optional; GPULoadOp
        this.depthStoreOp = depthStoreOp; //Optional; GPUStoreOp
        this.depthReadOnly = depthReadOnly; //Optional; boolean; default = false
        this.stencilClearValue = stencilClearValue; //Optional; GPUStencilValue; default =0
        this.stencilLoadOp = stencilLoadOp; //Optional; GPULoadOp
        this.stencilStoreOp = stencilStoreOp; //Optional; GPUStoreOp
        this.stencilReadOnly = stencilReadOnly; //Optional; boolean; default = false
    }

    setView ( view )
    {
        this.view = view;
    }

    setDepthClearValue ( depthClearValue )
    {
        this.depthClearValue = depthClearValue;
    }

    setDepthLoadOp ( depthLoadOp )
    {
        this.depthLoadOp = depthLoadOp;
    }

    setDepthStoreOp ( depthStoreOp )
    {
        this.depthStoreOp = depthStoreOp;
    }

    setDepthReadOnly ( depthReadOnly )
    {
        this.depthReadOnly = depthReadOnly;
    }

    setStencilClearValue ( stencilClearValue )
    {
        this.stencilClearValue = stencilClearValue;
    }

    setStencilLoadOp ( stencilLoadOp )
    {
        this.stencilLoadOp = stencilLoadOp;
    }

    setStencilStoreOp ( stencilStoreOp )
    {
        this.stencilStoreOp = stencilStoreOp;
    }

    setStencilReadOnly ( stencilReadOnly )
    {
        this.stencilReadOnly = stencilReadOnly;
    }

    static getAvailableDepthLoadOps ()
    {
        return new easygpu.webgpu.GPULoadOp();
    }

    static getAvailableDepthStoreOps ()
    {
        return new easygpu.webgpu.GPUStoreOp();
    }

    static getAvailableStencilLoadOps ()
    {
        return new easygpu.webgpu.GPULoadOp();
    }

    static getAvailableStencilStoreOps ()
    {
        return new easygpu.webgpu.GPUStoreOp();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPURenderPassDepthStencilAttachment";
    }
};
easygpu.webgpu.GPURenderPassDepthStencilAttachment.prototype.getAvailableDepthLoadOps = easygpu.webgpu.GPURenderPassDepthStencilAttachment.getAvailableDepthLoadOps;
easygpu.webgpu.GPURenderPassDepthStencilAttachment.prototype.getAvailableDepthStoreOps = easygpu.webgpu.GPURenderPassDepthStencilAttachment.getAvailableDepthStoreOps;
easygpu.webgpu.GPURenderPassDepthStencilAttachment.prototype.getAvailableStencilLoadOps = easygpu.webgpu.GPURenderPassDepthStencilAttachment.getAvailableStencilLoadOps;
easygpu.webgpu.GPURenderPassDepthStencilAttachment.prototype.getAvailableStencilStoreOps = easygpu.webgpu.GPURenderPassDepthStencilAttachment.getAvailableStencilStoreOps;