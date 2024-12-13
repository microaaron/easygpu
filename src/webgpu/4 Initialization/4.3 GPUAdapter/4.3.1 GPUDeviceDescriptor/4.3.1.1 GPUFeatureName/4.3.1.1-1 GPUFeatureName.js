/**
 * @file GPUFeatureName.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUFeatureName = class GPUFeatureName
{
    depth_clip_control = "depth-clip-control";

    depth32float_stencil8 = "depth32float-stencil8";

    texture_compression_bc = "texture-compression-bc";

    texture_compression_bc_sliced_3d = "texture-compression-bc-sliced-3d";

    texture_compression_etc2 = "texture-compression-etc2";

    texture_compression_astc = "texture-compression-astc";

    texture_compression_astc_sliced_3d = "texture-compression-astc-sliced-3d";

    timestamp_query = "timestamp-query";

    indirect_first_instance = "indirect-first-instance";

    shader_f16 = "shader-f16";

    rg11b10ufloat_renderable = "rg11b10ufloat-renderable";

    bgra8unorm_storage = "bgra8unorm-storage";

    float32_filterable = "float32-filterable";

    float32_blendable = "float32-blendable";

    clip_distances = "clip-distances";

    dual_source_blending = "dual-source-blending";

    constructor ( device )
    {
        if ( !device.features.has( "depth-clip-control" ) )
        {
            delete this.depth_clip_control;
        }
        if ( !device.features.has( "depth32float-stencil8" ) )
        {
            delete this.thisdepth32float_stencil8;
        }
        if ( !device.features.has( "texture-compression-bc" ) )
        {
            delete this.texture_compression_bc;
        }
        if ( !device.features.has( "texture-compression-bc-sliced-3d" ) )
        {
            delete this.texture_compression_bc_sliced_3d;
        }
        if ( !device.features.has( "texture-compression-etc2" ) )
        {
            delete this.texture_compression_etc2;
        }
        if ( !device.features.has( "texture-compression-astc" ) )
        {
            delete this.texture_compression_astc;
        }
        if ( !device.features.has( "texture-compression-astc-sliced-3d" ) )
        {
            delete this.texture_compression_astc_sliced_3d;
        }
        if ( !device.features.has( "timestamp-query" ) )
        {
            delete this.timestamp_query;
        }
        if ( !device.features.has( "indirect-first-instance" ) )
        {
            delete this.indirect_first_instance;
        }
        if ( !device.features.has( "shader-f16" ) )
        {
            delete this.shader_f16;
        }
        if ( !device.features.has( "rg11b10ufloat-renderable" ) )
        {
            delete this.rg11b10ufloat_renderable;
        }
        if ( !device.features.has( "bgra8unorm-storage" ) )
        {
            delete this.bgra8unorm_storage;
        }
        if ( !device.features.has( "float32-filterable" ) )
        {
            delete this.float32_filterable;
        }
        if ( !device.features.has( "float32-blendable" ) )
        {
            delete this.float32_blendable;
        }
        if ( !device.features.has( "clip-distances" ) )
        {
            delete this.clip_distances;
        }
        if ( !device.features.has( "dual-source-blending" ) )
        {
            delete this.dual_source_blending;
        }
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUFeatureName";
    }
};