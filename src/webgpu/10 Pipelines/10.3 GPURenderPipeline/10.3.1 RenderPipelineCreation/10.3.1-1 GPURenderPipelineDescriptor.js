/**
 * @file GPURenderPipelineDescriptor.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.01
 */
easygpu.webgpu.GPURenderPipelineDescriptor = class GPURenderPipelineDescriptor extends easygpu.webgpu.GPUPipelineDescriptorBase
{
    constructor ( layout, vertex, fragment, primitive, depthStencil, multisample, label )
    {
        super( layout, label );
        this.vertex = vertex;
        this.fragment = fragment; //Optional
        this.primitive = primitive; //Optional
        this.depthStencil = depthStencil; //Optional
        this.multisample = multisample; //Optional
        if ( !this.vertex )
        {this.vertex = this.newVrtex();}
    }

    setVrtex ( vertex )
    {
        this.vertex = vertex;
    }

    setPrimitive ( primitive )
    {
        this.primitive = primitive;
    }

    setDepthStencil ( depthStencil )
    {
        this.depthStencil = depthStencil;
    }

    setMultisample ( multisample )
    {
        this.multisample = multisample;
    }

    setFragment ( fragment )
    {
        this.fragment = fragment;
    }

    static newVrtex ( module, entryPoint, constants, buffers )
    {
        return new easygpu.webgpu.GPUVertexState( module, entryPoint, constants, buffers );
    }

    static newFragment ( module, entryPoint, constants, targets )
    {
        return new easygpu.webgpu.GPUFragmentState( module, entryPoint, constants, targets );
    }

    static newPrimitive ( topology, stripIndexFormat, frontFace, cullMode, unclippedDepth )
    {
        return new easygpu.webgpu.GPUPrimitiveState( topology, stripIndexFormat, frontFace, cullMode, unclippedDepth );
    }

    static newDepthStencil ( format, depthWriteEnabled, depthCompare, stencilFront, stencilBack, stencilReadMask, stencilWriteMask, depthBias, depthBiasSlopeScale, depthBiasClamp )
    {
        return new easygpu.webgpu.GPUDepthStencilState( format, depthWriteEnabled, depthCompare, stencilFront, stencilBack, stencilReadMask, stencilWriteMask, depthBias, depthBiasSlopeScale, depthBiasClamp );
    }

    static newMultisample ( count, mask, alphaToCoverageEnabled )
    {
        return new easygpu.webgpu.GPUMultisampleState( count, mask, alphaToCoverageEnabled );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPURenderPipelineDescriptor";
    }
};
easygpu.webgpu.GPURenderPipelineDescriptor.prototype.newVrtex = easygpu.webgpu.GPURenderPipelineDescriptor.newVrtex;
easygpu.webgpu.GPURenderPipelineDescriptor.prototype.newFragment = easygpu.webgpu.GPURenderPipelineDescriptor.newFragment;
easygpu.webgpu.GPURenderPipelineDescriptor.prototype.newPrimitive = easygpu.webgpu.GPURenderPipelineDescriptor.newPrimitive;
easygpu.webgpu.GPURenderPipelineDescriptor.prototype.newDepthStencil = easygpu.webgpu.GPURenderPipelineDescriptor.newDepthStencil;
easygpu.webgpu.GPURenderPipelineDescriptor.prototype.newMultisample = easygpu.webgpu.GPURenderPipelineDescriptor.newMultisample;