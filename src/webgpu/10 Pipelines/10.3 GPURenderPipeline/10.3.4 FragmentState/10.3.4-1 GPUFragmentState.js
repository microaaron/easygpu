/**
 * @file GPUFragmentState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUFragmentState = class GPUFragmentState extends easygpu.webgpu.GPUProgrammableStage
{
    constructor ( module, entryPoint, constants, targets = [] )
    {
        super( module, entryPoint, constants );
        this.targets = targets; //Optional
    }

    setTargets ( targets )
    {
        this.targets = targets;
    }

    static newTarget ( format, blend, writeMask )
    {
        return new easygpu.webgpu.GPUColorTargetState( format, blend, writeMask );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUFragmentState";
    }
};
easygpu.webgpu.GPUFragmentState.prototype.newTarget = easygpu.webgpu.GPUFragmentState.newTarget;