/**
 * @file GPUVertexAttribute.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUVertexAttribute = class GPUVertexAttribute
{
    constructor ( format, offset, shaderLocation )
    {
        this.format = format;
        this.offset = offset;
        this.shaderLocation = shaderLocation;
    }

    setFormat ( format )
    {
        this.format = format;
    }

    setOffset ( offset )
    {
        this.offset = offset;
    }

    setShaderLocation ( shaderLocation )
    {
        this.shaderLocation = shaderLocation;
    }

    static getAvailableFormats ()
    {
        return new easygpu.webgpu.GPUVertexFormat();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUVertexAttribute";
    }
};
easygpu.webgpu.GPUVertexAttribute.prototype.getAvailableFormats = easygpu.webgpu.GPUVertexAttribute.getAvailableFormats;