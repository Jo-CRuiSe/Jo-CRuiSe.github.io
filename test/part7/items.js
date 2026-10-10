
const portfolioItems = [];

const images = [
    'https://imglf6.lf127.net/img/551cd5c65588456b/UFZTUldOYTRpNnppRmV3ZTVSMDFuQkhKZTZkV0tpQ3liZGx2aWNnK2FURT0.jpeg?imageView&thumbnail=1000x0&type=jpg',
    'https://imglf3.lf127.net/img/4f323ee95f1314c2/UFZTUldOYTRpNnpnZlVkTG9GZnFiVUlTaHJzUDRFb1p3Q0lEZGVZc1VLRT0.jpeg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
    'https://imglf3.lf127.net/img/fca0dfad8dc13388/UFZTUldOYTRpNnlyVFIxVkdHREd5dzNUanEyRWlVRGdUaFoyaTUvMnk3bz0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
    'https://imglf4.lf127.net/img/256828d4a62caa2d/UFZTUldOYTRpNnlENTlPZklGeFdGWllyeVlvcVdkY1F3ZG5DZWRqeW13MD0.gif',
    'https://imglf3.lf127.net/img/d1390542d3530149/UFZTUldOYTRpNnlENTlPZklGeFdGZlNadjJjeXl0Y29uYkE1bk1xY04vUT0.gif',
    'https://imglf3.lf127.net/img/dbf0f88f75de8082/UFZTUldOYTRpNnlENTlPZklGeFdGUjBHWmw3V0dHZG43VU11UzhvQUk0WT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0',
    'https://imglf5.lf127.net/img/b59100c3727980d4/UFZTUldOYTRpNnlENTlPZklGeFdGZmswbUE4RkNxRU93Zng2V0J1UnEvYz0.gif',
    'https://imglf5.lf127.net/img/d3d037e1dff56dd5/UFZTUldOYTRpNnlENTlPZklGeFdGZkhoR3NxbllHYWUzV3N0bU5laEcvUT0.jpeg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
    'https://imglf3.lf127.net/img/bb789a89de6c47f2/UFZTUldOYTRpNnlENTlPZklGeFdGUm5uNHZoYTFvR2s3V0xwallpcEFWWT0.gif',
    'https://imglf3.lf127.net/img/83df34c9c785ec13/UFZTUldOYTRpNnlENTlPZklGeFdGVnNoWXdlalYyb3FiQlRiUHFDcURnRT0.jpeg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
    'https://imglf6.lf127.net/img/f6ef3e8108a48e41/UFZTUldOYTRpNnhuVktXL1ZaczAwWG5HS2Q2REtzbUsvMUxwQVNkaUhEUT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg',
];

const layerTitle = [
    'Small Kitchen',
    'Headphone',
    'Mooncake',
    'Art School',
    'Rocket Launching',
    'Cake',
    'Solor System',
    'AMBPOEIAI',
    'Plane Model',
    'MONIN',
    'Clock',
    
]

const infoTitle = [
    '',
    '北欧风耳机场景',
    '月饼建模+渲染',
    '轻量化的C4D动画',
    '浅试 AE 动画',
    'Octane——初试锋芒',
    '',
    '',
    '',
    '',
    'C4D 建模尝试',
]

const info = [
    '',
    '针对商业化产品进行场景布置、材质构建、光照练习。用高光凸显主体，HDR 光对室内初照明，区域光构造暗部、突出局部。',
    '这是我第一次独立地使用Octane渲染器尝试完成一张静态图片。由于没有实景参考，需要自己构想一个位置并摆放模型。制作过程中也要注意1：1进行建模以便把握布局。其他制作细节我放在博客里进行介绍。',
    '使用全局光照会严重减慢渲染速度，这个动画总渲染时间却不到十分钟。得益于低多边形和零玻璃材质，整体画风表现为卡通动画的同时让动画更加灵动。掌握了动画烘焙技巧。',
    '虽然之前我做后期偶尔会用到AE，但我对其界面布局和操作并不熟悉，大多数情况只是用于去黑色背景、分离alpha通道等。这次是我系统学习AE的一个开始，我也逐渐对其用户界面熟悉并能轻松完成一些基本效果。',
    '当我入手Octane渲染器后，我首先尝试了它的输出质感。更容易比自带的渲染器输出高级质感。光影、虚实、滤镜所有都可以在OC摄像机中调整；丰富的材质简化了创作过程。',
    '',
    '',
    '',
    '',
    '闹钟的案例让我开始对默认渲染器所支持的材质制作有了一定的了解，并熟悉了如何从零进行建模、上材质、打光、渲染静态图片，是我以后学习其他案例的基础',
]
let imageIndex = 0;

for(let i = 0; i < images.length; i++) {
    let item = {
        id: i,
        layerTitle: layerTitle[i],
        image: images[imageIndex],
        infoTitle: infoTitle[i],
        info: info[i],
    };
    portfolioItems.push(item);
    imageIndex++;
    if(imageIndex > images.length - 1) {
        imageIndex = 0;
    };
};


