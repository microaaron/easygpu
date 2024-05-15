/**
 * @file GPURequestAdapterOptions.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPURequestAdapterOptions = class GPURequestAdapterOptions
{
    constructor ( powerPreference, forceFallbackAdapter )
    {
        this.powerPreference = powerPreference;//Optional;
        this.forceFallbackAdapter = forceFallbackAdapter;//Optional; boolean; undefined = false
    }

    setPowerPreference ( powerPreference ){this.powerPreference = powerPreference;}

    setForceFallbackAdapter ( forceFallbackAdapter ){this.forceFallbackAdapter = forceFallbackAdapter;}

    static getAvailablePowerPreferences (){return new easygpu.webgpu.GPUPowerPreference();}

    get [ Symbol.toStringTag ] ()
    {
        return "GPURequestAdapterOptions";
    }
};
easygpu.webgpu.GPURequestAdapterOptions.prototype.getAvailablePowerPreferences = easygpu.webgpu.GPURequestAdapterOptions.getAvailablePowerPreferences;