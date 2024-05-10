/**
 * @file GPUVertexState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUVertexState = class GPUVertexState extends easygpu.webgpu.GPUProgrammableStage
{
    constructor ( module, entryPoint, constants, buffers = [] )
    {
        super( module, entryPoint, constants );
        this.buffers = buffers; //Optional
    }

    setBuffers ( buffers )
    {
        this.buffers = buffers;
    }

    static newBuffer ( arrayStride, stepMode, attributes )
    {
        return new easygpu.webgpu.GPUVertexBufferLayout( arrayStride, stepMode, attributes );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUVertexState";
    }
};
easygpu.webgpu.GPUVertexState.prototype.newBuffer = easygpu.webgpu.GPUVertexState.newBuffer;