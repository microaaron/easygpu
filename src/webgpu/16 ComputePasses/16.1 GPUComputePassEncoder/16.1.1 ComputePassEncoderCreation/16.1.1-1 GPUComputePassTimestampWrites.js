/**
 * @file GPUComputePassTimestampWrites.js
 * @author microaaron(github.com/microaaron)
 * @date 2024.05
 */
easygpu.webgpu.GPUComputePassTimestampWrites = class GPUComputePassTimestampWrites
{
    constructor ( querySet, beginningOfPassWriteIndex, endOfPassWriteIndex )
    {
        this.querySet = querySet;//Required GPUQuerySet
        this.beginningOfPassWriteIndex = beginningOfPassWriteIndex;//GPUSize32
        this.endOfPassWriteIndex = endOfPassWriteIndex;//GPUSize32
    }

    setQuerySet ( querySet ){this.querySet = querySet;}

    setBeginningOfPassWriteIndex ( beginningOfPassWriteIndex ){this.beginningOfPassWriteIndex = beginningOfPassWriteIndex;}

    setEndOfPassWriteIndex ( endOfPassWriteIndex ){this.endOfPassWriteIndex = endOfPassWriteIndex;}

    get [ Symbol.toStringTag ] ()
    {
        return "GPUComputePassTimestampWrites";
    }
};