/**
 * @file GPUQueryType.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUQueryType = class GPUQueryType
{
    occlusion = "occlusion";

    timestamp = "timestamp";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUQueryType";
    }
};