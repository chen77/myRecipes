
// IOS中浏览页面当页面滚动到顶部或底部时继续滚动会将整个页面滑动，阻止这种效果可以使用下面的函数,参数为最外层容器的选择器
$(function(){
	preventPageScroll('.wrapper');
	function preventPageScroll(id){
	    var el = document.querySelector(id);
	    var sy = 0;
	    el.addEventListener('touchstart', function (e) {
	      sy = e.pageY;
	    });
	    el.addEventListener('touchmove', function (e) {
	      var down = (e.pageY - sy > 0);
	      //top
	      if (down && el.scrollTop <= 0) {
	        e.preventDefault();
	      }
	      //bottom
	      if (!down && el.scrollTop >= el.scrollHeight - el.clientHeight) {
	        e.preventDefault();
	      }
	    });
	}
})




