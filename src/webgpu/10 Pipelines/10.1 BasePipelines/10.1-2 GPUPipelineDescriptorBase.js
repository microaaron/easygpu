/**
 * @file GPUPipelineDescriptorBase.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUPipelineDescriptorBase = class GPUPipelineDescriptorBase extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( layout = "auto", label )
    {
        super( label );
        this.layout = layout;
    }

    setLayout ( layout )
    {
        this.layout = layout;
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUPipelineDescriptorBase";
    }
};