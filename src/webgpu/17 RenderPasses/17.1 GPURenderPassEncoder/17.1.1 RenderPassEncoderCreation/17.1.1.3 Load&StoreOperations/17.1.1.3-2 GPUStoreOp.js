/**
 * @file  GPUStoreOp.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu. GPUStoreOp = class  GPUStoreOp
{
    load = "store";

    discard = "discard";

    constructor ()
    {
        Object.freeze( this );
    }

    get [ Symbol.toStringTag ] ()
    {
        return " GPUStoreOp";
    }
};