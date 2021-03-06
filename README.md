# Intégration HTML / SCSS / JS avec Webpack

# Getting start
```bash
npm i
npm run start
# http://localhost:3000/public/homepage.html
# CODE !
```
## Development
```bash
# For autocompile
npm run start
# For compile 
npm run build
```
## Production
```bash
# /!!\ Need build and prod for Purify CSS
npm run build && npm run prod
```

## All commands
```bash
npm run build # For compile source files into dist folder
npm run dev   # same

npm run start # For autocompile source files into dist folder
npm run watch # same

npm run prod  # Build for production

npm run doc   # create documentation css / js
npm run open:dev # Open homepage.html
```

# Add JS file
**1) Ajouter ton fichier JS dans l'une des catégories suivante :**
- resources/assets/js/<b>components</b>/ (btn, navbar, carrousel...)
- resources/assets/js/<b>pages</b>/ (JS uniquement sur des pages page spécifique)
- resources/assets/js/<b>commun.js</b> (Pour toute les pages)

**2.1) JS d'une page :**
```js
// dans le dossier : pages/TAPAGE.js
/*———————————————————————————————————*\
    $ TAPAGE
\*———————————————————————————————————*//*
  @required: <body id="page-TAPAGE">

*/
export default function(){
  if ($('#page-TAPAGE').length > 0) {
    console.log('TAPAGE.js');
  }
}
```
```js
// dans le dossier : ./app.js
import TAPAGE from './pages/TAPAGE';

jQuery(document).ready(function () {
  ...
  TAPAGE()
  ...
});
```

**2.2) JS d'un composant**
```js
// dans le dossier : components/TONCOMPOSANT.js
/*———————————————————————————————————*\
    $ TONCOMPOSANT
\*———————————————————————————————————*/
export function taFonction() {
  // Code de la fonction
  console.log('components/TONCOMPOSANT.js->taFonction()');
}
```
```js
// dans le dossier que tu le souhaite
/*———————————————————————————————————*\
  $ IMPORTS
\*———————————————————————————————————*/
import * as TONCOMPOSANT from './components/TONCOMPOSANT';

TONCOMPOSANT.taFonction();
```

# Add SCSS file
1) Créer ton fichier SCSS dans le dossier source
2) Import ton fichier SCSS dans main.scss

# Add HTML file
1) Créer ton fichier PUG dans le dossier source/templates/pages
2) Import ton fichier PUG dans ``webpack.common.js``
````js
plugins: [
  // IMPORTS ALL HTML FILES
  new HtmlWebpackPlugin({ filename: config.distPath+'/homepage.html', template: config.srcPath_HTML + '/homepage.pug' }),
]
````

# Technos :
- HTML (PUG)
- SCSS
- JS
  - Jquery 3.2.1
- Webpack
  - **[dev]**  [Brower sync](https://github.com/Va1/browser-sync-webpack-plugin) (livereload)
  - **[dev]**  [Clean](https://github.com/johnagan/clean-webpack-plugin) (supprime le dossier de destination)
  - **[dev]**  [Sourcemap](https://webpack.js.org/configuration/devtool/) (chemin des fichiers d'origines)
  - **[both]** [babel-loader](https://github.com/babel/babel-loader) (ES6)
  - **[both]** [file-loader](https://github.com/webpack-contrib/file-loader) (copie img dans le dossier de destination)
  - **[both]** [url-loader](https://github.com/webpack-contrib/url-loader) (copie img dans le dossier de destination)
  - **[both]** [html-loader](https://github.com/webpack-contrib/html-loader) (copie html dans le dossier de destination (**PROD** : minify html))
  -  **[both]** [webpack-svgstore-plugin](https://www.npmjs.com/package/webpack-svgstore-plugin) (Génère un .svg contenant toutes les icônes)
  - SCSS
    - **[both]** [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) (SASS & SCSS)
    - **[prod]** [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) (Minification du JS)
  - [Postcss](https://github.com/postcss/postcss-loader)
    - **[both]** [Autoprefixer](https://github.com/postcss/autoprefixer) (rajoute les prefix pour la compatiblité navigateur (voir browserslist dans package.json) )
    - **[both]** [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) (Concat les medias query) 
  - **[prod]** [Purify](https://github.com/webpack-contrib/purifycss-webpack) (Remove les class useless)
  - **[prod]** [Eslint](https://github.com/MoOx/eslint-loader) (Lint le JS)
  - **[prod]** [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) (Optimisation des images)
  - **[prod]** [jsdoc](https://github.com/tcoopman/image-webpack-loader) (Optimisation des images)
  - **[prod]** [opener](https://github.com/domenic/opener) (Ouvre un fichier / url avec webpack et ligne de commande)


# Configuration :
La compilation est configurable dans le fichier : `/compile.config`

# Problèmes :
**problem 1**
````bash
ERROR in Error: Child compilation failed:
  Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
    Referenced from: /Users/vincentbattez/Documents/Documents_mbp-vincent/Programmation/starter-integration/node_modules/mozjpeg/vendor/cjpeg
    Reason: image not found
````
> [Solution](https://github.com/tcoopman/image-webpack-loader/issues/51) : ``brew install libpng`` 

**problem 2**
<br>`problème quelconque`
> Supprimer package.lock.json & node_modules puis npm install

**problem 3**
```
(node:38604) DeprecationWarning: Chunk.modules is deprecated. Use Chunk.getNumberOfModules/mapModules/forEachModule/containsModule instead.
(node:38604) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: Cannot read property 'viewBox' of undefined
(node:38604) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
> Vérifier si le code de toutes les icons soit aux normes svg


# TODO :
- [ ] Rassembler toutes les images dans un dossier dist