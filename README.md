# vue-image-lazy
A image lazy loading plugin for vue.

[![GitHub issues](https://img.shields.io/github/issues/dai-siki/vue-image-lazy.svg)](https://github.com/dai-siki/vue-image-lazy/issues)
[![GitHub forks](https://img.shields.io/github/forks/dai-siki/vue-image-lazy.svg)](https://github.com/dai-siki/vue-image-lazy/network)
[![GitHub stars](https://img.shields.io/github/stars/dai-siki/vue-image-lazy.svg)](https://github.com/dai-siki/vue-image-lazy/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dai-siki/vue-image-lazy.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

[![NPM](https://nodei.co/npm/vue-image-lazy.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vue-image-lazy/)

## Demo
[Click me](http://dai-siki.github.io/vue-image-lazy/example/demo.html).

## Brower compatibility
IE9+


## Env
vue@1.0 + webpack + es6

## Install
#### npm
```shell
$ npm install vue-image-lazy
```

## Usage
#### Example
```html
<div id="app">
    <img v-lazy="img" v-for="img in imgs">
</div>

<script>
	import 'babel-polyfill'; // es6 shim
	import Vue from 'vue';
	import vueLazy from 'vue-image-lazy';

    Vue.use(vueLazy, {
    	loading: 'imgs/default.jpg', //default image, if element has 'src' attribute, ignore this
    	error: 'imgs/error.jpg' //if image load failed, try to load the image
    });

    new Vue({
    	el: '#app',
    	data: {
    		imgs: [
    			'imgs/1.jpg',
    			'imgs/2.jpg',
    			'imgs/3.jpg',
    			'imgs/4.jpg',
    			'imgs/5.jpg',
    			'imgs/6.jpg',
    			'imgs/7.jpg',
    			'imgs/8.jpg'
    		]
    	}
    });

</script>
```
