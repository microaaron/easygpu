/**
 * @file GPUBufferBindingLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBufferBindingLayout = class GPUBufferBindingLayout
{
    constructor ( type, hasDynamicOffset, minBindingSize )
    {
        this.type = type; //Optional; GPUBufferBindingType; undefined = "uniform"
        this.hasDynamicOffset = hasDynamicOffset; //Optional; boolean; undefined = false
        this.minBindingSize = minBindingSize; //Optional; GPUSize64; undefined = 0
    }

    setType ( type )
    {
        this.type = type;
    }

    setHasDynamicOffset ( hasDynamicOffset )
    {
        this.hasDynamicOffset = hasDynamicOffset;
    }

    setMinBindingSize ( minBindingSize )
    {
        this.minBindingSize = minBindingSize;
    }

    static getAvailableTypes ()
    {
        return new easygpu.webgpu.GPUBufferBindingType();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBufferBindingLayout";
    }
};
easygpu.webgpu.GPUBufferBindingLayout.prototype.getAvailableTypes = easygpu.webgpu.GPUBufferBindingLayout.getAvailableTypes;