/**
 * @file GPUCommandEncoderDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUCommandEncoderDescriptor = class GPUCommandEncoderDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( label )
    {
        super( label );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUCommandEncoderDescriptor";
    }
};