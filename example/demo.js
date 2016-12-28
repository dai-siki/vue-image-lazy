import 'babel-polyfill';
import Vue from 'vue';
import vueLazy from '../lazy.js';

Vue.use(vueLazy, {
	loading: 'imgs/default.jpg',
	error: 'imgs/error.jpg'
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
			'imgs/8.jpg',
			'imgs/9.png',
			'imgs/10.jpg',
			'imgs/11.jpg',
			'imgs/12.jpg',
			'imgs/13.jpg',
			'imgs/14.jpg',
			'imgs/15.jpg'
		]
	}
});
