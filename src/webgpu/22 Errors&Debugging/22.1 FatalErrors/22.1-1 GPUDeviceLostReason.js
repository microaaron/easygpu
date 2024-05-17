/**
 * @file GPUDeviceLostReason.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUDeviceLostReason = class GPUDeviceLostReason
{
    unknown = "unknown";

    destroyed = "destroyed";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUDeviceLostReason";
    }
};