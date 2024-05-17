/**
 * @file GPUOrigin3DDict.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.02
 */
easygpu.webgpu.GPUOrigin3DDict = class GPUOrigin3DDict
{
    constructor ( x, y, z )
    {
        this.x = x; //Required GPUIntegerCoordinate
        this.y = y; //Required GPUIntegerCoordinate
        this.z = z; //Required GPUIntegerCoordinate
    }

    setX ( x )
    {
        this.x = x;
    }

    setY ( y )
    {
        this.y = y;
    }

    setZ ( z )
    {
        this.z = z;
    }

    get [ Symbol.toStringTag ] ()
    {
        return "GPUOrigin3DDict";
    }
};