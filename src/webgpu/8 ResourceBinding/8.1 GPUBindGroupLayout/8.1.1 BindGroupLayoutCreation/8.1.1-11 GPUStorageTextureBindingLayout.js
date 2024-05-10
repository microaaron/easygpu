/**
 * @file GPUStorageTextureBindingLayout.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUStorageTextureBindingLayout = class GPUStorageTextureBindingLayout
{
    constructor ( access, format, viewDimension )
    {
        this.access = access; //Optional; GPUStorageTextureAccess; undefined = "write-only""
        this.format = format; //Required GPUTextureFormat;
        this.viewDimension = viewDimension; //Optional; GPUTextureViewDimension; undefined = "2d"
    }

    setAccess ( access )
    {
        this.access = access;
    }

    setFormat ( format )
    {
        this.format = format;
    }

    setViewDimension ( viewDimension )
    {
        this.viewDimension = viewDimension;
    }

    static getAvailableFormats ( device )
    {
        return new easygpu.webgpu.GPUTextureFormat( device );
    }

    static getAvailableViewDimensions ()
    {
        return new easygpu.webgpu.GPUTextureViewDimension();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUStorageTextureBindingLayout";
    }
};
easygpu.webgpu.GPUStorageTextureBindingLayout.prototype.getAvailableFormats = easygpu.webgpu.GPUStorageTextureBindingLayout.getAvailableFormats;
easygpu.webgpu.GPUStorageTextureBindingLayout.prototype.getAvailableViewDimensions = easygpu.webgpu.GPUStorageTextureBindingLayout.getAvailableViewDimensions;