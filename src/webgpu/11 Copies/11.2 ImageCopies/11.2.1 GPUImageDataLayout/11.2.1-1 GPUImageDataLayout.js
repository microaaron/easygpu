/**
 * @file GPUImageDataLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUImageDataLayout = class GPUImageDataLayout
{
    constructor ( offset, bytesPerRow, rowsPerImage )
    {
        this.offset = offset;//Optional; GPUSize64; undefined = 0
        this.bytesPerRow = bytesPerRow;//Optional
        this.rowsPerImage = rowsPerImage;//Optional
    }

    setOffset ( offset ){this.offset = offset;}

    setBytesPerRow ( bytesPerRow ){this.bytesPerRow = bytesPerRow;}

    setRowsPerImage ( rowsPerImage ){this.rowsPerImage = rowsPerImage;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUImageDataLayout";
    }
};