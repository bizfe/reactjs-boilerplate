# reactjs-boilerplate

This is reactjs project boilerplate of BizFE.

## Features

**Base on:** Reactjs & Babel 6 & webpack, Support [ot module replacement](https://webpack.github.io/docs/webpack-dev-middleware.html)

**jsx:** ES6 & Class syntax

**css:** less & CSS Modules

**router:** react-router

**flux:** redux


## How to use 

#### Develope
```shell
 git clone https://github.com/bizfe/reactjs-boilerplate.git reactproj

 cd reactproj && (sudo)npm install 

 npm run dev

 cd fedev, node fedev.js -a (ex: kugua.react reactproj)

 open http://xxxxx.com/home (hope enjoy~)

```
#### Production
```
npm run build (then commit the static folder)

node fedev.js -li reactproj (deploy like other codebases)
	
```

build with(static/): 
- bundle.js (logic codes)
- lib.bundle.js (common libs)
- styles.css (components styles)

## License

MIT
