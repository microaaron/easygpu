/**
 * @file GPUShaderModuleCompilationHint.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.03
 */
easygpu.webgpu.GPUShaderModuleCompilationHint = class GPUShaderModuleCompilationHint
{
    constructor ( entryPoint, layout )
    {
        this.entryPoint = entryPoint; //Required USVString;
        this.layout = layout;//GPUPipelineLayout or GPUAutoLayoutMode;
    }

    setEntryPoint ( entryPoint ){this.entryPoint = entryPoint;}

    setLayout ( layout ){this.layout = layout;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUShaderModuleCompilationHint";
    }
};