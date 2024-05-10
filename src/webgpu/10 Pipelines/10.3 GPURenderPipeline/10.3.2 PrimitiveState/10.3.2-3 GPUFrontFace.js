/**
 * @file GPUFrontFace.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUFrontFace = class GPUFrontFace
{
    ccw = "ccw";

    cw = "cw";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUFrontFace";
    }
};