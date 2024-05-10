/**
 * @file GPUBindGroupDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBindGroupDescriptor = class GPUBindGroupDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( layout, entries = [], label )
    {
        super( label );
        this.layout = layout; //Required GPUBindGroupLayout
        this.entries = entries; //Required sequence<GPUBindGroupEntry>
    }

    setLayout ( layout )
    {
        this.layout = layout;
    }

    setEntries ( entries )
    {
        this.entries = entries;
    }

    static newEntry ( binding, resource )
    {
        return new easygpu.webgpu.GPUBindGroupEntry( binding, resource );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBindGroupDescriptor";
    }
};
easygpu.webgpu.GPUBindGroupDescriptor.prototype.newEntry = easygpu.webgpu.GPUBindGroupDescriptor.newEntry;