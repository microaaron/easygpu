/**
 * @file GPUCanvasAlphaMode.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUCanvasAlphaMode = class GPUCanvasAlphaMode
{
    opaque = "lopaque";

    premultiplied = "premultiplied";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUCanvasAlphaMode";
    }
};