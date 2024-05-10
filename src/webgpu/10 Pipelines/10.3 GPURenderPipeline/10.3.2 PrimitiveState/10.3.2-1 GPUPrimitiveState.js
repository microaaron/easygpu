/**
 * @file GPUPrimitiveState.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPUPrimitiveState = class GPUPrimitiveState
{
    constructor ( topology, stripIndexFormat, frontFace, cullMode, unclippedDepth )
    {
        this.topology = topology; //Optional
        this.stripIndexFormat = stripIndexFormat; //Optional
        this.frontFace = frontFace; //Optional
        this.cullMode = cullMode; //Optional

        // Requires "depth-clip-control" feature.
        this.unclippedDepth = unclippedDepth; //Optional; boolean; undefined = false; Requires "depth-clip-control" feature.
    }

    setTopology ( topology )
    {
        this.topology = topology;
    }

    setStripIndexFormat ( stripIndexFormat )
    {
        this.stripIndexFormat = stripIndexFormat;
    }

    setFrontFace ( frontFace )
    {
        this.frontFace = frontFace;
    }

    setCullMode ( cullMode )
    {
        this.cullMode = cullMode;
    }

    setUnclippedDepth ( unclippedDepth )
    {
        this.unclippedDepth = unclippedDepth;
    }

    static getAvailableTopologys ()
    {
        return new easygpu.webgpu.GPUPrimitiveTopology();
    }

    static getAvailableStripIndexFormats ()
    {
        return new easygpu.webgpu.GPUIndexFormat();
    }

    static getAvailableFrontFaces ()
    {
        return new easygpu.webgpu.GPUFrontFace();
    }

    static getAvailableCullModes ()
    {
        return new easygpu.webgpu.GPUCullMode();
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUPrimitiveState";
    }
};
easygpu.webgpu.GPUPrimitiveState.prototype.getAvailableTopologys = easygpu.webgpu.GPUPrimitiveState.getAvailableTopologys;
easygpu.webgpu.GPUPrimitiveState.prototype.getAvailableStripIndexFormats = easygpu.webgpu.GPUPrimitiveState.getAvailableStripIndexFormats;
easygpu.webgpu.GPUPrimitiveState.prototype.getAvailableFrontFaces = easygpu.webgpu.GPUPrimitiveState.getAvailableFrontFaces;
easygpu.webgpu.GPUPrimitiveState.prototype.getAvailableCullModes = easygpu.webgpu.GPUPrimitiveState.getAvailableCullModes;