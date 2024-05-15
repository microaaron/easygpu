/**
 * @file GPUCompilationMessageType.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUCompilationMessageType = class GPUCompilationMessageType
{
    error = "error";

    warning = "warning";

    info = "info";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUCompilationMessageType";
    }
};