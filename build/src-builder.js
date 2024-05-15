//--------------------------------------------------------------------------------------------------

const fs              = require('fs-extra');
const terser          = require("terser");
const concat          = require('concat');
const process         = require("child_process");
const zip             = require("zip-lib");
const package         = require("../package.json");
const packages        = require("./core/packages.json");
//const terser_options  = { mangle: { reserved: ['workerProcess'] } };
const terser_options  = {};

//--------------------------------------------------------------------------------------------------

const ROOT_FOLDER = "./";
const DIST_FOLDER = "./dist/";
const GIT_FOLDER  = "./.git/";
const VERSION     = package.version;
const IS_GIT      = fs.existsSync( GIT_FOLDER );
const BUILD       = IS_GIT ? process.execSync('git rev-list --count HEAD').toString().trim() : "Not available";
const REVISION    = IS_GIT ? process.execSync('git rev-parse HEAD').toString().trim()        : "Not available";
const DATE        = IS_GIT ? process.execSync('git log -1 --format=%cd').toString().trim()   : new Date();

//--------------------------------------------------------------------------------------------------

const HEADER = `/** 
 * EASYGPU ${VERSION}
 * Build : ${BUILD}
 * Revision: ${REVISION}
 * Date: ${DATE}
 */
`;

//--------------------------------------------------------------------------------------------------

const VERSION_FILE = `EASYGPU ${VERSION}
Build : ${BUILD}
Revision: ${REVISION}
Date: ${DATE}
`;

//--------------------------------------------------------------------------------------------------

async function concatVersions()
{
    const version = {};

    let lastPackageName;

    for ( const packageName in packages )
    {
        const scripts = [],
              package = packages[ packageName ];

        for ( const basePath in package )
        {
            const files = package[ basePath ];

            for( let i = 0, n = files.length; i < n; i++ )
            {
                scripts.push( ROOT_FOLDER + basePath + files[ i ] );
            }
        }

        if ( lastPackageName )
        {
            version[ packageName ] = version[ lastPackageName ] + await concat( scripts );
        }
        else
        {
            version[ packageName ] = await concat( scripts );

            version[ packageName ] = version[ packageName ].replace( "__EASYGPU_VERSION__", VERSION );
            version[ packageName ] = version[ packageName ].replace( "__EASYGPU_BUILD__", BUILD );
            version[ packageName ] = version[ packageName ].replace( "__EASYGPU_REVISION__", REVISION );
            version[ packageName ] = version[ packageName ].replace( "__EASYGPU_DATE__", DATE );
        }

        lastPackageName = packageName;
    }

    return version;
}

//--------------------------------------------------------------------------------------------------

async function build()
{
    console.log( "> Recreate dist folder ..." );

    fs.removeSync( DIST_FOLDER );
    fs.mkdirSync( DIST_FOLDER );

    console.log( "> Concat files ..." );

    const versions = await concatVersions();

    console.log( "> Minify easygpu.js ..." );

    versions[ "BASIC_MIN" ] = terser.minify( versions[ "BASIC" ], terser_options ).code;

    console.log( "> Write easygpu.debug.js ..." );

    fs.writeFileSync( DIST_FOLDER + "easygpu.debug.js", HEADER + versions[ "BASIC" ] );

    console.log( "> Write easygpu.js ..." );

    fs.writeFileSync( DIST_FOLDER + "easygpu.js", HEADER + versions[ "BASIC_MIN" ] );

    console.log( "> Write VERSION ..." );

    fs.writeFileSync( DIST_FOLDER + "VERSION", VERSION_FILE );

    console.log( "> Build archive ..." );

    await zip.archiveFolder(DIST_FOLDER, DIST_FOLDER + "easyGPU-" + VERSION + ".zip");
}

//--------------------------------------------------------------------------------------------------

build();
