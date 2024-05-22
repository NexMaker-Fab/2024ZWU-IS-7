// 获取导航栏元素
var navbar = document.querySelector('.desktop .frame-wrapper');

// 监听页面滚动事件
window.addEventListener('scroll', function() {
  // 获取页面滚动的垂直距离
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 判断页面滚动的距离，如果大于等于导航栏的顶部位置，则添加悬浮样式，否则移除悬浮样式
  if (scrollTop >= navbar.offsetTop) {
    navbar.classList.add('floating');
  } else {
    navbar.classList.remove('floating');
  }
});
