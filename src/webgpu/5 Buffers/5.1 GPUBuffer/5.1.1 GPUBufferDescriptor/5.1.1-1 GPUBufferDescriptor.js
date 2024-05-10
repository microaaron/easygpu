/**
 * @file GPUBufferDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBufferDescriptor = class GPUBufferDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( size, usage, mappedAtCreation, label )
    {
        super( label );
        this.size = size; //Required GPUSize64
        this.usage = usage; //Required GPUBufferUsageFlags
        this.mappedAtCreation = mappedAtCreation; //Optional; boolean; undefined = false
    }

    setSize ( size )
    {
        this.size = size;
    }

    setUsage ( usage )
    {
        this.usage = usage;
    }

    setMappedAtCreation ( mappedAtCreation )
    {
        this.mappedAtCreation = mappedAtCreation;
    }

    static getAvailableUsages ()
    {
        return new easygpu.webgpu.GPUBufferUsage();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBufferDescriptor";
    }
};
easygpu.webgpu.GPUBufferDescriptor.prototype.getAvailableUsages = easygpu.webgpu.GPUBufferDescriptor.getAvailableUsages;