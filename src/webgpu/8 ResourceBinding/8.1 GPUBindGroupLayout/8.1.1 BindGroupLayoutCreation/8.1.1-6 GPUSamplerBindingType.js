/**
 * @file GPUSamplerBindingType.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUSamplerBindingType = class GPUSamplerBindingType
{
    filtering = "filtering";

    non_filtering = "non-filtering";

    comparison = "comparison";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUSamplerBindingType";
    }
};