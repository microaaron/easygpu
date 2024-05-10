/**
 * @file GPUDepthStencilState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUDepthStencilState = class GPUDepthStencilState
{
    constructor ( format, depthWriteEnabled, depthCompare, stencilFront, stencilBack, stencilReadMask, stencilWriteMask, depthBias, depthBiasSlopeScale, depthBiasClamp )
    {
        this.format = format;
        this.depthWriteEnabled = depthWriteEnabled;
        this.depthCompare = depthCompare;
        this.stencilFront = stencilFront; //Optional
        this.stencilBack = stencilBack; //Optional
        this.stencilReadMask = stencilReadMask; //Optional
        this.stencilWriteMask = stencilWriteMask; //Optional
        this.depthBias = depthBias; //Optional
        this.depthBiasSlopeScale = depthBiasSlopeScale; //Optional
        this.depthBiasClamp = depthBiasClamp; //Optional
    }

    setFormat ( format )
    {
        this.format = format;
    }

    setDepthWriteEnabled ( depthWriteEnabled )
    {
        this.depthWriteEnabled = depthWriteEnabled;
    }

    setDepthCompare ( depthCompare )
    {
        this.depthCompare = depthCompare;
    }

    setStencilFront ( stencilFront )
    {
        this.stencilFront = stencilFront;
    }

    setStencilBack ( stencilBack )
    {
        this.stencilBack = stencilBack;
    }

    setStencilReadMask ( stencilReadMask )
    {
        this.stencilReadMask = stencilReadMask;
    }

    setStencilWriteMask ( stencilWriteMask )
    {
        this.stencilWriteMask = stencilWriteMask;
    }

    setDepthBias ( depthBias )
    {
        this.depthBias = depthBias;
    }

    setDepthBiasSlopeScale ( depthBiasSlopeScale )
    {
        this.depthBiasSlopeScale = depthBiasSlopeScale;
    }

    setDepthBiasClamp ( depthBiasClamp )
    {
        this.depthBiasClamp = depthBiasClamp;
    }

    static newStencilFront ()
    {
        return new easygpu.webgpu.GPUStencilFaceState();
    }

    static newStencilBack ()
    {
        return new easygpu.webgpu.GPUStencilFaceState();
    }

    static getAvailableFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    static getAvailableDepthCompares ()
    {
        return new easygpu.webgpu.GPUCompareFunction();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUDepthStencilState";
    }
};
easygpu.webgpu.GPUDepthStencilState.prototype.newStencilFront = easygpu.webgpu.GPUDepthStencilState.newStencilFront;
easygpu.webgpu.GPUDepthStencilState.prototype.newStencilBack = easygpu.webgpu.GPUDepthStencilState.newStencilBack;
easygpu.webgpu.GPUDepthStencilState.prototype.getAvailableFormats = easygpu.webgpu.GPUDepthStencilState.getAvailableFormats;
easygpu.webgpu.GPUDepthStencilState.prototype.getAvailableDepthCompares = easygpu.webgpu.GPUDepthStencilState.getAvailableDepthCompares;