/**
 * @file GPULoadOp.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPULoadOp = class GPULoadOp
{
    load = "load";

    clear = "clear";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPULoadOp";
    }
};