/**
 * @file GPUBlendState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUBlendState = class GPUBlendState
{
    constructor ( color = this.newColor(), alpha = this.newColor() )
    {
        this.color = color;
        this.alpha = alpha;
    }

    setColor ( color )
    {
        this.color = color;
    }

    setAlpha ( alpha )
    {
        this.alpha = alpha;
    }

    static newColor ( operation, srcFactor, dstFactor )
    {
        return new easygpu.webgpu.GPUBlendComponent( operation, srcFactor, dstFactor );
    }

    static newAlpha ( operation, srcFactor, dstFactor )
    {
        return new easygpu.webgpu.GPUBlendComponent( operation, srcFactor, dstFactor );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBlendState";
    }
};
easygpu.webgpu.GPUBlendState.prototype.newColor = easygpu.webgpu.GPUBlendState.newColor;
easygpu.webgpu.GPUBlendState.prototype.newAlpha = easygpu.webgpu.GPUBlendState.newAlpha;