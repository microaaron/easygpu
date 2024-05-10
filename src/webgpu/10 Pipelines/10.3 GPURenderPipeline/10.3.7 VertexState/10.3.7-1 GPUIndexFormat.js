/**
 * @file GPUIndexFormat.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUIndexFormat = class GPUIndexFormat
{
    uint16 = "uint16";

    uint32 = "uint32";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUIndexFormat";
    }
};