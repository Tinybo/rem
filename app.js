require('./index.scss');

// viewport的宽度（屏幕宽度）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取htmlDom
let htmlDom = document.querySelector('html');

// 设置html的fontSize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

// 动态适配布局
window.addEventListener('resize', (e) => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});