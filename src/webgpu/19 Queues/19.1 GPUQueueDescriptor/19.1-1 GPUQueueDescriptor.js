/**
 * @file GPUQueueDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUQueueDescriptor = class GPUQueueDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( label )
    {
        super( label );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUQueueDescriptor";
    }
};