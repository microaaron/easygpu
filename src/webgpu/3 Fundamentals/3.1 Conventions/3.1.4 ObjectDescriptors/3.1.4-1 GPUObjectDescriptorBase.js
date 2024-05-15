/**
 * @file GPUObjectDescriptorBase.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUObjectDescriptorBase = class GPUObjectDescriptorBase
{
    constructor ( label )
    {
        this.label = label; //Optional
    }

    setLabel ( label )
    {
        this.label = label;
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUObjectDescriptorBase";
    }
};