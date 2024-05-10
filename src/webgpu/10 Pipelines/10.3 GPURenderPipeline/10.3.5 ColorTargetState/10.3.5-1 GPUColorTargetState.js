/**
 * @file GPUColorTargetState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUColorTargetState  = class GPUColorTargetState
{
    constructor ( format, blend, writeMask )
    {
        this.format = format;
        this.blend = blend; //Optional
        this.writeMask = writeMask; //Optional
    }

    setFormat ( format )
    {
        this.format = format;
    }

    setBlend ( blend )
    {
        this.blend = blend;
    }

    setWriteMask ( writeMask )
    {
        this.writeMask = writeMask;
    }

    static newBlend ( color, alpha )
    {
        return new easygpu.webgpu.GPUBlendState( color, alpha );
    }

    static getAvailableFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    static getAvailableWriteMasks ()
    {
        return new easygpu.webgpu.GPUColorWrite();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUColorTargetState";
    }
};
easygpu.webgpu.GPUColorTargetState.prototype.newBlend = easygpu.webgpu.GPUColorTargetState.newBlend;
easygpu.webgpu.GPUColorTargetState.prototype.getAvailableFormats = easygpu.webgpu.GPUColorTargetState.getAvailableFormats;
easygpu.webgpu.GPUColorTargetState.prototype.getAvailableWriteMasks = easygpu.webgpu.GPUColorTargetState.getAvailableWriteMasks;