/**
 * @file GPUBindGroupEntry.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUBindGroupEntry = class GPUBindGroupEntry
{
    constructor ( binding, resource )
    {
        this.binding = binding; //Required GPUIndex32
        this.resource = resource; //Required GPUBindingResource; typedef (GPUSampler or GPUTextureView or GPUBufferBinding or GPUExternalTexture) GPUBindingResource
    }

    setBinding ( binding )
    {
        this.binding = binding;
    }

    setResource ( resource )
    {
        this.resource = resource;
    }

    static newResource_GPUBufferBinding ( buffer, offset, size )
    {
        return new easygpu.webgpu.GPUBufferBinding( buffer, offset, size );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUBindGroupEntry";
    }
};
easygpu.webgpu.GPUBindGroupEntry.prototype.newResource_GPUBufferBinding = easygpu.webgpu.GPUBindGroupEntry.newResource_GPUBufferBinding;