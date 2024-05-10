/**
 * @file GPUVertexBufferLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUVertexBufferLayout = class GPUVertexBufferLayout
{
    constructor ( arrayStride, stepMode, attributes = [] )
    {
        this.arrayStride = arrayStride;
        this.stepMode = stepMode; //Optional
        this.attributes = attributes;
    }

    setArrayStride ( arrayStride )
    {
        this.arrayStride = arrayStride;
    }

    setStepMode ( stepMode )
    {
        this.stepMode = stepMode;
    }

    setAttributes ( attributes )
    {
        this.attributes = attributes;
    }

    static newAttribute ( format, offset, shaderLocation )
    {
        return new easygpu.webgpu.GPUVertexAttribute( format, offset, shaderLocation );
    }

    static getAvailableStepModes ()
    {
        return new easygpu.webgpu.GPUVertexStepMode();
    }
};
easygpu.webgpu.GPUVertexBufferLayout.prototype.newAttribute = easygpu.webgpu.GPUVertexBufferLayout.newAttribute;
easygpu.webgpu.GPUVertexBufferLayout.prototype.newgetAvailableStepModesAttribute = easygpu.webgpu.GPUVertexBufferLayout.getAvailableStepModes;