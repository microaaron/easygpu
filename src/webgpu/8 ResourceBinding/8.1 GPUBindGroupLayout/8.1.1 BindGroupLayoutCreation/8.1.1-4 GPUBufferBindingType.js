/**
 * @file GPUBufferBindingType.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBufferBindingType = class GPUBufferBindingType
{
    uniform = "uniform";

    storage = "storage";

    read_only_storage = "read-only-storage";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBufferBindingType";
    }
};