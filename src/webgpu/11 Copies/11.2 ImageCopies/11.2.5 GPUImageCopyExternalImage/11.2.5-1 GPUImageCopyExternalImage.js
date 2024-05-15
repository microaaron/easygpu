/**
 * @file GPUImageCopyExternalImage.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUImageCopyExternalImage = class GPUImageCopyExternalImage
{
    constructor ( source, origin = {}, flipY )
    {
        this.source = source;//Required GPUImageCopyExternalImageSource (ImageBitmap or ImageData or HTMLImageElement or HTMLVideoElement or VideoFrame or HTMLCanvasElement or OffscreenCanvas)
        this.origin = origin;//Optional; GPUOrigin2D; undefined = {}
        this.flipY = flipY;//Optional; boolean; undefined = false
    }

    setSource ( source ){this.source = source;}

    setOrigin ( origin ){this.origin = origin;}

    setFlipY ( flipY ){this.flipY = flipY;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUImageCopyExternalImage";
    }
};