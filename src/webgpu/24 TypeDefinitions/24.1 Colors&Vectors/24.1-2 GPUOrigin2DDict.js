/**
 * @file GPUOrigin2DDict.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUOrigin2DDict = class GPUOrigin2DDict
{
    constructor ( x, y )
    {
        this.x = x; //Required GPUIntegerCoordinate
        this.y = y; //Required GPUIntegerCoordinate
    }

    setX ( x )
    {
        this.x = x;
    }

    setY ( y )
    {
        this.y = y;
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUOrigin2DDict";
    }
};