/**
 * @file GPUBindGroupLayoutDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBindGroupLayoutDescriptor = class GPUBindGroupLayoutDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( entries = [], label )
    {
        super( label );
        this.entries = entries; //Required sequence<GPUBindGroupLayoutEntry>
    }

    setEntries ( entries )
    {
        this.entries = entries;
    }

    static newEntry ( binding, visibility, resourceLayoutObject )
    {
        return new easygpu.webgpu.GPUBindGroupLayoutEntry( binding, visibility, resourceLayoutObject );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBindGroupLayoutDescriptor";
    }
};
easygpu.webgpu.GPUBindGroupLayoutDescriptor.prototype.newEntry = easygpu.webgpu.GPUBindGroupLayoutDescriptor.newEntry;