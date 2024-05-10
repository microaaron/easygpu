/**
 * @file GPUTextureSampleType.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUTextureSampleType = class GPUTextureSampleType
{
    float = "float";

    unfilterable_float = "unfilterable-float";

    depth = "depth";

    sint = "sint";

    uint = "uint";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUTextureSampleType";
    }
};