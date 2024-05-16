/**
 * @file GPUComputePassDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUComputePassDescriptor = class GPUComputePassDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( label )
    {
        super( label );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUComputePassDescriptor";
    }
};