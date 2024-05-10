/**
 * @file GPUCullMode.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUCullMode = class GPUCullMode
{
    none = "none";

    front = "front";

    back = "back";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUCullMode";
    }
};