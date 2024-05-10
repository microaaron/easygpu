/**
 * @file GPUSamplerBindingLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUSamplerBindingLayout = class GPUSamplerBindingLayout
{
    constructor ( type )
    {
        this.type = type; //Optional; GPUSamplerBindingType; undefined = "filtering"
    }

    setType ( type )
    {
        this.type = type;
    }

    static getAvailableTypes ()
    {
        return new easygpu.webgpu.GPUSamplerBindingType();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUSamplerBindingLayout";
    }
};
easygpu.webgpu.GPUSamplerBindingLayout.prototype.getAvailableTypes = easygpu.webgpu.GPUSamplerBindingLayout.getAvailableTypes;