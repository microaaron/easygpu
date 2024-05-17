/**
 * @file GPUUncapturedErrorEventInit.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUUncapturedErrorEventInit = class GPUUncapturedErrorEventInit
{
    constructor ( bubbles, cancelable, composed, error )
    {
        this.bubbles = bubbles;//Optional; boolean; undefined = false;
        this.cancelable = cancelable;//Optional; boolean; undefined = false;
        this.composed = composed;//Optional; boolean; undefined = false;
        this.error = error;//Required GPUError
    }

    setBubbles ( bubbles ){this.bubbles = bubbles;}

    setCancelable ( cancelable ){this.cancelable = cancelable;}

    setComposed ( composed ){this.composed = composed;}

    setError ( error ){this.error = error;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUUncapturedErrorEventInit";
    }
};