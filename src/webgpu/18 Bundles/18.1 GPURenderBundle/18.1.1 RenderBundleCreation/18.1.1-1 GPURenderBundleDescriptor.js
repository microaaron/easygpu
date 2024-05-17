/**
 * @file GPURenderBundleDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.03
 */
easygpu.webgpu.GPURenderBundleDescriptor = class GPURenderBundleDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( label )
    {
        super( label );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPURenderBundleDescriptor";
    }
};