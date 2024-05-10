/**
 * @file GPUMipmapFilterMode.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUMipmapFilterMode = class GPUMipmapFilterMode
{
    nearest = "nearest";

    linear = "linear";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUMipmapFilterMode";
    }
};