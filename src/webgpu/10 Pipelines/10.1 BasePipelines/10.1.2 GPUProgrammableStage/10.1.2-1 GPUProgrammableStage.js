/**
 * @file GPUProgrammableStage.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUProgrammableStage = class GPUProgrammableStage
{
    constructor ( module, entryPoint, constants )
    {
        this.module = module;
        this.entryPoint = entryPoint;
        this.constants = constants; //Optional
    }

    setModule ( module )
    {
        this.module = module;
    }

    setEntryPoint ( entryPoint )
    {
        this.entryPoint = entryPoint;
    }

    setConstants ( constants )
    {
        this.constants = constants;
    }

    static newConstants ( constants )
    {
        class Constants
        {
            constructor ( constants )
            {
                Object.assign( this, constants );
            }

            add ( constants )
            {
                Object.assign( this, constants );
            }
        }
        return new Constants( constants );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUProgrammableStage";
    }
};
easygpu.webgpu.GPUProgrammableStage.prototype.newConstants = easygpu.webgpu.GPUProgrammableStage.newConstants;