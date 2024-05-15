/**
 * @file GPUCommandBufferDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUCommandBufferDescriptor = class GPUCommandBufferDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( label )
    {
        super( label );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUCommandBufferDescriptor";
    }
};