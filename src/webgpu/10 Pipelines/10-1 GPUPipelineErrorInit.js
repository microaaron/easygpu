/**
 * @file GPUPipelineErrorInit.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUPipelineErrorInit = class GPUPipelineErrorInit
{
    constructor ( reason )
    {
        this.reason = reason; //Required GPUPipelineErrorReason
    }

    setReason ( reason )
    {
        this.reason = reason;
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUPipelineErrorInit";
    }
};