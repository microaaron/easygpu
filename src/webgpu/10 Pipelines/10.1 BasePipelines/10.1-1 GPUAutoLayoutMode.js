/**
 * @file GPUAutoLayoutMode.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUAutoLayoutMode = class GPUAutoLayoutMode
{
    auto = "auto";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUAutoLayoutMode";
    }
};