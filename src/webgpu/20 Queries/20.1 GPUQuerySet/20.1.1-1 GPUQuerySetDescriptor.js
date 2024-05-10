/**
 * @file GPUQuerySetDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUQuerySetDescriptor = class GPUQuerySetDescriptor extends easygpu.webgpu.GPUObjectDescriptorBase
{
    constructor ( type, count, label )
    {
        super( label );
        this.type = type; //Required GPUQueryType
        this.count = count; //Required GPUSize32
    }

    setType ( type )
    {
        this.type = type;
    }

    setCount ( count )
    {
        this.count = count;
    }

    static getAvailableTypes ()
    {
        return new easygpu.webgpu.GPUQueryType();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUQuerySetDescriptor";
    }
};
easygpu.webgpu.GPUQuerySetDescriptor.prototype.getAvailableTypes = easygpu.webgpu.GPUQuerySetDescriptor.getAvailableTypes;