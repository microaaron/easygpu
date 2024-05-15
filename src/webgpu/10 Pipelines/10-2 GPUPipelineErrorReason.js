/**
 * @file GPUPipelineErrorReason.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUPipelineErrorReason = class GPUPipelineErrorReason
{
    validation = "validation";

    internal = "internal";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUPipelineErrorReason";
    }
};