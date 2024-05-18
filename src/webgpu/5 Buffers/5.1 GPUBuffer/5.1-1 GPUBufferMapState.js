/**
 * @file GPUBufferMapState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUBufferMapState = class GPUBufferMapState
{
    unmapped = "unmapped";

    pending = "pending";
    mapped = "mapped";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBufferMapState";
    }
};