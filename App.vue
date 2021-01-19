<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
// html {
// 	font-size: 75px;
// }
	@import "uview-ui/index.scss";
	::-webkit-scrollbar {  
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
	#webpack-dev-server-client-overlay {
		display: none;
	}
	/deep/ .u-loading-circle {
		position: fixed;
		top: 50%;
		left: 45%;
		z-index: 1;
		border-color: #fa3534 #2979ff #71d5a1 #ff9900 !important;
	}
	
	// 解决scroll-view出现滚动条
	::-webkit-scrollbar{
		  display: none;
	}
	
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}
</style>
