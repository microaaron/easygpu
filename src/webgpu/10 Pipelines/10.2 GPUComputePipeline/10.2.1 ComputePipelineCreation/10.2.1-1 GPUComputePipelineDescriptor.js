/**
 * @file GPUComputePipelineDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUComputePipelineDescriptor = class GPUComputePipelineDescriptor extends easygpu.webgpu.GPUPipelineDescriptorBase
{
    constructor ( layout, compute, label )
    {
        super( layout, label );
        this.compute = compute;//Required GPUProgrammableStage
    }

    setCompute ( compute ){this.compute = compute;}

    static newCompute ( module, entryPoint, constants ){return new easygpu.webgpu.GPUProgrammableStage( module, entryPoint, constants );}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUComputePipelineDescriptor";
    }
};
easygpu.webgpu.GPUComputePipelineDescriptor.prototype.newCompute = easygpu.webgpu.GPUComputePipelineDescriptor.newCompute;