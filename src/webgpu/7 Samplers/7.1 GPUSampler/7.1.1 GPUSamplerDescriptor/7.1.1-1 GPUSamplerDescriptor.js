/**
 * @file GPUSamplerDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUSamplerDescriptor = class GPUSamplerDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( addressModeU, addressModeV, addressModeW, magFilter, minFilter, mipmapFilter, lodMinClamp, lodMaxClamp, compare, maxAnisotropy, label )
    {
        super( label );
        this.addressModeU = addressModeU;//Optional; GPUAddressMode; undefined = "clamp-to-edge"
        this.addressModeV = addressModeV;//Optional; GPUAddressMode; undefined = "clamp-to-edge"
        this.addressModeW = addressModeW;//Optional; GPUAddressMode; undefined = "clamp-to-edge"
        this.magFilter = magFilter;//Optional; GPUFilterMode; undefined = "nearest"
        this.minFilter = minFilter;//Optional; GPUFilterMode; undefined = "nearest"
        this.mipmapFilter = mipmapFilter;//Optional; GPUMipmapFilterMode; undefined = "nearest"
        this.lodMinClamp = lodMinClamp;//Optional; float; undefined = 0
        this.lodMaxClamp = lodMaxClamp;//Optional; float; undefined = 32
        this.compare = compare;//Optional
        this.maxAnisotropy = maxAnisotropy;//Optional; unsigned short; undefined = 1
    }

    setAddressModeU ( addressModeU ){this.addressModeU = addressModeU;}

    setAddressModeV ( addressModeV ){this.addressModeV = addressModeV;}

    setAddressModeW ( addressModeW ){this.addressModeW = addressModeW;}

    setMagFilter ( magFilter ){this.magFilter = magFilter;}

    setMinFilter ( minFilter ){this.minFilter = minFilter;}

    setMipmapFilter ( mipmapFilter ){this.mipmapFilter = mipmapFilter;}

    setLodMinClamp ( lodMinClamp ){this.lodMinClamp = lodMinClamp;}

    setLodMaxClamp ( lodMaxClamp ){this.lodMaxClamp = lodMaxClamp;}

    setCompare ( compare ){this.compare = compare;}

    setMaxAnisotropy ( maxAnisotropy ){this.maxAnisotropy = maxAnisotropy;}

    static getAvailableAddressModeUs (){return new easygpu.webgpu.GPUAddressMode();}

    static getAvailableAddressModeVs (){return new easygpu.webgpu.GPUAddressMode();}

    static getAvailableAddressModeWs (){return new easygpu.webgpu.GPUAddressMode();}

    static getAvailableMagFilters (){return new easygpu.webgpu.GPUFilterMode();}

    static getAvailableMinFilters (){return new easygpu.webgpu.GPUFilterMode();}

    static getAvailableMipmapFilters (){return new easygpu.webgpu.GPUMipmapFilterMode();}

    static getAvailableCompares (){return new easygpu.webgpu.GPUCompareFunction();}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUSamplerDescriptor";
    }
};
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableAddressModeUs = easygpu.webgpu.GPUSamplerDescriptor.getAvailableAddressModeUs;
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableAddressModeVs = easygpu.webgpu.GPUSamplerDescriptor.getAvailableAddressModeVs;
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableAddressModeWs = easygpu.webgpu.GPUSamplerDescriptor.getAvailableAddressModeWs;
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableMagFilters = easygpu.webgpu.GPUSamplerDescriptor.getAvailableMagFilters;
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableMinFilters = easygpu.webgpu.GPUSamplerDescriptor.getAvailableMinFilters;
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableMipmapFilters = easygpu.webgpu.GPUSamplerDescriptor.getAvailableMipmapFilters;
easygpu.webgpu.GPUSamplerDescriptor.prototype.getAvailableCompares = easygpu.webgpu.GPUSamplerDescriptor.getAvailableCompares;