/**
 * @file GPUMapMode.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUMapMode = class GPUMapMode
{
    READ = 0x0001;

    WRITE = 0x0002;

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUMapMode";
    }
};