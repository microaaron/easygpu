/**
 * @file GPUDeviceLostReason.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUDeviceLostReason = class GPUDeviceLostReason
{
    validation = "validation";

    out_of_memory = "out-of-memory";

    internal = "internal";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUDeviceLostReason";
    }
};