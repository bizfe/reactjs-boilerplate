# reactjs-boilerplate

This is reactjs project boilerplate of BizFE.

## Example

http://g.mlsfe.biz/reactjs-boilerplate/example/

## Features

**Base on:** Reactjs & Babel 6 & webpack, Support [Hot module replacement](https://webpack.github.io/docs/webpack-dev-middleware.html)

**jsx:** ES6 & Class syntax

**css:** less & CSS Modules

**router:** react-router

**flux:** redux

**lint:** eslint  (support es6 & react code style check, you can run `npm run lint` for lint)

## How to use 

#### Develop
```shell
 git clone https://github.com/bizfe/reactjs-boilerplate.git reactproj

 cd reactproj && sudo npm run install && npm install

 npm run dev

 cd fedev, node fedev.js -a (ex: kugua.react reactproj)

 open http://xxxxx.com/home

 open http://xxxxx.com/home/index2

```
hope you enjoy~ :smile:

#### Production
```
npm run lint (check the code style;you could also skip it)

npm run build (then commit the static folder)

node fedev.js -li reactproj (deploy like other codebases)
	
```

build with(static/): 
- bbox.bundle.js (bbox logic codes)
- jquery.bundle.js (jquery logic codes)
- lib.bundle.js (common libs)
- bbox.styles.css (bbox components styles)
- jquery.styles.css (jqeury components styles)

#### Notice

#####1. eslint

pay attention to modify `Tab Size`

## License

MIT
