# React-ES6-Webpack-Babel-Starter
A boilerplate sample for making oneself started with React, ES2015/ES6, Webpack, Babel.

Inspired from:

https://blog.stamplay.com/getting-started-with-react-es6-webpack/

https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html

(Please do read the above two links, if you want to have some good level of basic understanding about React, Webpack, Babel etc.)

### Instructions for compiling the sample in this repo and making it running:

#### Pre-requisites

Install npm and GIT (If you dont have these on your system yet)

Using Command Prompt do a git clone of this repo somewhere on your system:

```git clone https://github.com/topgun743/React-ES6-Webpack-Babel-Starter.git```

cd to the folder where you have git cloned the repo.

#### Install all necessary modules using either:

```
$ npm install
```

#### Or if you want to go for a one by one approach, then do:

```
$ npm install react --save
$ npm install react-dom --save
$ npm install css-loader style-loader --save-dev
$ npm install webpack --save-dev
$ npm install html-webpack-plugin --save-dev
$ npm install webpack-dev-server -g
$ npm install babel-loader --save-dev 
$ npm install babel-core --save-dev 
$ npm install babel-preset-es2015 --save-dev 
$ npm install babel-preset-react --save-dev 
```

#### Run the sample

```
$ webpack-dev-server --progress --colors
```

Open Browser and go to:

```
  localhost:8080
```


By now you must be owing me a cup of coffee or a pack of some nice chocolates :)

### [Update]
For the sake of demo purposes and calling React modules from Javascript I have modified Hello.jsx and index.jsx files.
I have exposed Hello module to consumer js. The sample on page load at present shows name and age, example:

```Hello Dude. You are 20.```

You can call this Hello module from javascript/console like so:

```
	Util.renderHelloFromConsole({id: "test1", name:"Tom", age: 27});
```




