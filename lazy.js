/**
 * vue 图片懒加载
 *
 * @author dai-siki <851733175@qq.com>
 */

export default {
	install(Vue, options = {}) {
		let opts = Object.assign({
			loading: '',
			error: ''
		}, options);

        // 添加vue指令
		Vue.directive('lazy', {
			bind() {
				let that = this, {el} = that;
                // 初始化懒加载状态 0未开始 1加载中 2加载成功 3加载失败
				el.setAttribute('lazyStatus', '0');
			},
			update(value, oValue) {
				let that = this,
					{el} = that;

				const updateSrc = function(){
					if (el.nodeName.toLowerCase() === 'img') {
						let handleScroll = function() {
							imgLoad(el, value, handleScroll);
						};
                        // 这里必须是下一轮循环，否则没反应
						that.vm.$nextTick(function() {
							handleScroll();
						});
                        // 滚动事件绑定
						window.addEventListener('scroll', handleScroll);
					}
				};

				if (!el.getAttribute('src') && opts.loading) {
					el.setAttribute('src', opts.loading);
					const iniHandleLoad = function () {
						el.removeEventListener('load', iniHandleLoad);
						updateSrc();
					};
					el.addEventListener('load', iniHandleLoad);
				}else if(value !== oValue){
					updateSrc();
				}
			}
		});

        // 判断元素是否在屏幕范围内
		function imgInScreen(el) {
			let screenHeight = document.documentElement.clientHeight,
				eleTop = el.getBoundingClientRect().top,
				eleHeight = el.getBoundingClientRect().height;
			return eleTop > -eleHeight && eleTop < screenHeight;
		}

        // 图片加载
		function imgLoad(el, src, handleScroll) {
			let sts = el.getAttribute('lazyStatus'); //1代表加载中
			if (sts === '0' && imgInScreen(el)) {
                // 如果快速滚动，会被忽略
				setTimeout(function() {
					let sts = el.getAttribute('lazyStatus'); //1代表加载中
					if (sts === '0' && imgInScreen(el)) {
						el.setAttribute('lazyStatus', 1);
						el.setAttribute('src', src);
						imgLoadSucc(el, handleScroll);
						imgLoadError(el, handleScroll);
					}
				}, 400);
			}
		}

        // 图片加载成功
		function imgLoadSucc(el, handleScroll) {
			el.setAttribute('lazyStatus', 3);
			unbindScroll(el, handleScroll);
			function handleLoad() {
				el.setAttribute('lazyStatus', 2);
			}
			el.addEventListener('load', handleLoad);
		}

        // 图片加载失败
		function imgLoadError(el, handleScroll) {
			el.setAttribute('lazyStatus', 3);
			unbindScroll(el, handleScroll);
			function handleError() {
				el.setAttribute('src', opts.error);
				el.removeEventListener('error', handleError);
			}
			if (opts.error) {
				el.addEventListener('error', handleError);
			}
		}

        // 解除滚动事件绑定
		function unbindScroll(el, handleScroll) {
			window.removeEventListener('scroll', handleScroll);
		}
	}
};
