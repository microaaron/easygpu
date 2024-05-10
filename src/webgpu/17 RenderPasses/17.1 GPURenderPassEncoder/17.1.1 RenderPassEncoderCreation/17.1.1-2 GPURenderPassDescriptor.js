/**
 * @file GPURenderPassDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPURenderPassDescriptor = class GPURenderPassDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( colorAttachments = [], depthStencilAttachment, occlusionQuerySet, timestampWrites, maxDrawCount, label )
    {
        super( label );
        this.colorAttachments = colorAttachments; //Required sequence<GPURenderPassColorAttachment?>
        this.depthStencilAttachment = depthStencilAttachment; //Optional; GPURenderPassDepthStencilAttachment
        this.occlusionQuerySet = occlusionQuerySet; //Optional; GPUQuerySet
        this.timestampWrites = timestampWrites; //Optional; GPURenderPassTimestampWrites
        this.maxDrawCount = maxDrawCount; //Optional; GPUSize64; undefined = 50000000
    }

    setColorAttachments ( colorAttachments )
    {
        this.colorAttachments = colorAttachments;
    }

    setDepthStencilAttachment ( depthStencilAttachment )
    {
        this.depthStencilAttachment = depthStencilAttachment;
    }

    setOcclusionQuerySet ( occlusionQuerySet )
    {
        this.occlusionQuerySet = occlusionQuerySet;
    }

    setTimestampWrites ( timestampWrites )
    {
        this.timestampWrites = timestampWrites;
    }

    setMaxDrawCount ( maxDrawCount )
    {
        this.maxDrawCount = maxDrawCount;
    }

    static newColorAttachment ()
    {
        return new easygpu.webgpu.GPURenderPassColorAttachment();
    }

    static newDepthStencilAttachment ()
    {
        return new easygpu.webgpu.GPURenderPassDepthStencilAttachment();
    }

    static newTimestampWrites ()
    {
        return new easygpu.webgpu.GPURenderPassTimestampWrites();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPURenderPassDescriptor";
    }
};
easygpu.webgpu.GPURenderPassDescriptor.prototype.newColorAttachment = easygpu.webgpu.GPURenderPassDescriptor.newColorAttachment;
easygpu.webgpu.GPURenderPassDescriptor.prototype.newDepthStencilAttachment = easygpu.webgpu.GPURenderPassDescriptor.newDepthStencilAttachment;
easygpu.webgpu.GPURenderPassDescriptor.prototype.newTimestampWrites = easygpu.webgpu.GPURenderPassDescriptor.newTimestampWrites;