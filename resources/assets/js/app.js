console.log("ready!");
/*———————————————————————————————————*\
        $ XHR ICONS
\*———————————————————————————————————*/
var __svg__  = { path: './../images/icons/**/*.svg', name: 'images/spriteXHR.svg' };
__svg__      = { filename: 'public/images/spriteXHR.svg'};

require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);