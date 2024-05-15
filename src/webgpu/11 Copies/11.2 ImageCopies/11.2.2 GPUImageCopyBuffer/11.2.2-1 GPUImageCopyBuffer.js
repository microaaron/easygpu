/**
 * @file GPUImageCopyBuffer.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUImageCopyBuffer = class GPUImageCopyBuffer extends easygpu.webgpu.GPUImageDataLayout
{
    constructor ( offset, bytesPerRow, rowsPerImage, buffer )
    {
        super( offset, bytesPerRow, rowsPerImage );
        this.buffer = buffer; //Required GPUBuffer
    }

    setBuffer ( buffer )
    {
        this.buffer = buffer;
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUImageCopyBuffer";
    }
};