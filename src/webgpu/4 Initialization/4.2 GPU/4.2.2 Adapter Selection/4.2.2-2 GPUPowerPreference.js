/**
 * @file GPUPowerPreference.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUPowerPreference = class GPUPowerPreference
{
    low_power = "low-power";

    high_performance = "high-performance";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUPowerPreference";
    }
};