/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","1d316e3dd97534ac66184255daf7a16d"],["/about/index.html","4cd85e9fcb52a4d1de1f1c85797cdfe1"],["/archives/2021/11/index.html","faec709e9cf0338d1f1cec71de5f8876"],["/archives/2021/12/index.html","24e3b49e098d432c2857f8c0e3cc066b"],["/archives/2021/index.html","9bf857afbc74ee904d6d35b8b133a469"],["/archives/2022/04/index.html","c8061836012f314fc57aed44c45e0683"],["/archives/2022/05/index.html","4ea72634dfdf560335a0afd34fd83adc"],["/archives/2022/index.html","a97078c94279d5af7e399a56837062e5"],["/archives/index.html","2eb75a32213dae91a0d8fd9ae474f13e"],["/archives/page/2/index.html","f7e10cfd15d86de4adaace7751d994ea"],["/av/index.html","46a42495a43dfaecc2368cde66446356"],["/categories/index.html","f729bf6a0b228d496c042d835dc950ef"],["/categories/博客搭建/index.html","7ad472ffd9070e5c7230c148cd3a2410"],["/categories/计算机/index.html","2e0c087a1de9b60d6cb752aff80b9d7e"],["/categories/随笔/index.html","128cfe4259c20b65105eb74548d493f9"],["/categories/音乐曲谱/index.html","210331dc7d32c65df8eb4ae422e0764b"],["/contact/index.html","e9dc838bc32a8f278b288eca468830c1"],["/css/dark.css","685d06b9c2d024e505ea6d8e7f8ae652"],["/css/detail/404.css","34d0107d1593984f5aef3e089d05863b"],["/css/detail/about.css","909ac656a2a1954d5bab86461a219ef5"],["/css/detail/archive.css","75f14338887061a480a3e89cc5c41797"],["/css/detail/av.css","c7b4fc0a37536917d1a7ecdeba5466a4"],["/css/detail/categories.css","58de284c7c7e18a0bda22c3cb09424f9"],["/css/detail/contact.css","a14fd97d5960ff8f7c66171cac4bdc69"],["/css/detail/essay.css","9a3504b40f73e84e1bba1a7496303e66"],["/css/detail/friends.css","0501169b605f23fc311fda7ca2fc5e3a"],["/css/detail/github-link.css","304640246bb056abb046bdab441b6bf4"],["/css/detail/index-cover.css","02177f061214ee3d4ab636a4f7ed3c8c"],["/css/detail/journal.css","1b4a79a8d8e767b0efae5f8c24a89502"],["/css/detail/navigate.css","b897b2a8910f9dd456a0f4e9cf735c80"],["/css/detail/post-detail-toc.css","7a8a0c435edfff81ce8059e2e4fcbee9"],["/css/detail/reward.css","d30cea30f4ccc5b35fd23f2cfc32ac06"],["/css/detail/rewardModal.css","0ece8a0496b613c08f4c28b213ead7ac"],["/css/detail/supervise.css","b746cb8508b165478afdcfa1d693b817"],["/css/detail/tag.css","7d0a9f788c24e813cb5a77474dad5b53"],["/css/detail/time.css","1beb2035e8750c6b773df81eb71de6d3"],["/css/detail/valine.css","fb29f8b31f19d4d80cb3d93a8e766ddf"],["/css/gitment.css","bba74775bcfe78d1805f47292c853305"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/islu.css","4d775dcb87cdcf7de41adca4bc1abd0a"],["/css/loading.css","303f034ddf5a903dadd547148f32cd8e"],["/css/my.css","c3137165f90fcfb1ac6f6d367a531257"],["/friends/index.html","ecaffe9fe94d2728ee7d11b3ee172938"],["/index.html","be531bae7f25d86b0eeaccd83121dcca"],["/jihua/index.html","2ed328d32059158dd52d6c69353d804d"],["/journal/index.html","dc87b27ed25050367a21337b9dab5582"],["/js/ScrollTrigger.min.js","0c89f58787b3be891c7d318d796b3fb6"],["/js/bai.js","6c3e79dec8a6617ba880688ad8475918"],["/js/canva.js","86dc29e91a4581209a9dc265b9d067af"],["/js/dark.js","319b935f11753d6f3737d675212deedf"],["/js/gsap.min.js","5b20e1b9b1c3ead05cd6c0c385128526"],["/js/islu.js","79f294aebda23ffec3abc6761ad90087"],["/js/moments.js","5dc6f4989645b1bcbab4b9c668328c82"],["/js/mustache.min.js","95da4833aaa2762aa943dedfc45d2cf0"],["/js/upscuits.js","59267996491dcd0c3fb603f348e17272"],["/js/uptimerobot.js","8d2a7280b467c80c0015aef7a9c9c4ca"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","7d31d1ee29632ade249b22e2f91b92a3"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/all.css","03c014db5057602b7cee7d15cce6d328"],["/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","f7122b14acc060d844a59f74db31d179"],["/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/libs/gitment/gitment-default.css","7a659cafa0fd263ac6b17c6594f19420"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/introduction/introduction.css","6af51334ad728e66c58a0e979dc130fb"],["/libs/introduction/introduction.js","86ce87832dd2c78c76f30b62d1898f6f"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","f9674ed3a99c118e1299e82630bf6490"],["/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","4cf7d0890238750cf9fd18878fea096f"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/prism/prism.css","1bfbc070a7e0e6224179ec74daf6cf23"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/search/search.js","12c309454a841dfd117b3d948d944edd"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e14b9c9f61cc7c9c2c788b0489c28e50"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/valine/Valine.min.js","1ddf49eabfa80849ee7791f5e6fa968c"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/live2dw/assets/moc/tororo.2048/texture_00.png","9bd791736cfc91b62670dee5f7fbd45c"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/1.jpg","8df52bbd0049231276073e2b0d023620"],["/medias/2.jpg","5b80385fed7f0a97c19d0b0619860e1f"],["/medias/article/blog3.jpg","b13c343dd298718f3ca46f1c06e10dfc"],["/medias/article/essay-life.jpg","a8379c18ee516b13b26549bd94be9b2e"],["/medias/article/shubiao.png","d565f11d88bf03bf09811316a464a078"],["/medias/article/termux.png","73450548f435f30ab30ed75538cd5f29"],["/medias/article/tuandui.png","d0cd1d9ab105d0c0bb7cbd70208bc6e4"],["/medias/avatar.jpg","a563ad34abef6579e72ab9745400aa86"],["/medias/banner/0.jpg","552337e788e4a5327bb4d784e0d3d380"],["/medias/banner/1.jpg","d0642723426873998239a09d010435ca"],["/medias/banner/2.jpg","cb0b5a706529a9077de5000b6ff295e1"],["/medias/banner/3.jpg","175672ad10e8e1d7323f8af938579c84"],["/medias/banner/4.jpg","480f40ebaeabdbf742c1dff978bae945"],["/medias/banner/404.jpg","8cb6537059e5f5a60a60ad5be2a54314"],["/medias/banner/5.jpg","23e841ed4c8c8326ac5ae329bf7db280"],["/medias/banner/6.jpg","dd25d0f77be332ec25dd59bd89bb6106"],["/medias/banner/7.jpg","deb7c6a82a85e021fbe4f5ee9c954bb5"],["/medias/banner/about.jpg","ecea3accd3015eecfe8941e3a390925e"],["/medias/banner/archives.jpg","9c6932ea171af32b627ba92c7a405e2f"],["/medias/banner/av.jpg","e4bf99b62456a765f6fdd7c919a35033"],["/medias/banner/categories.jpg","b26cc730f16ddce950fb472a51f39971"],["/medias/banner/contact.jpg","0a68a26173fce613d8a3db0302e31ee4"],["/medias/banner/friends.jpg","b89531df95a64d041d3a1dc95e4a1237"],["/medias/banner/journal.jpg","31988dc620b493ab6e8050203ce88f66"],["/medias/banner/navigate.jpg","90642b5cd86f8723ef6ddeeb37535fed"],["/medias/banner/rewardModal.jpg","736258ccfeacf3050afb9609478d4bdc"],["/medias/banner/supervise.jpg","0565628cf2f37ff062b8cdac54e0de38"],["/medias/banner/tags.jpg","16e757f4b8232e32f46d4b650ad9b848"],["/medias/banner/time.jpg","56cf757d1ffffc3ea76ceecb35605c91"],["/medias/detail/background.png","9eb70efbaed21b63cf35e67d123ae84b"],["/medias/detail/clock.png","28370211e87b730756da251df39dde35"],["/medias/detail/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/detail/grid.png","fc0288dcfeecf4e78625c676534f382b"],["/medias/detail/icon.png","67a1f6317d0e539346f0306ef297938a"],["/medias/detail/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/detail/load.gif","5cce4f682882c3e2aa25d297afd8b179"],["/medias/detail/logo.png","436fbe08f3165d84b296868570005ebb"],["/medias/detail/logo2.png","77eeac0ddf5b63d561b2506f190a81fb"],["/medias/detail/map_v2.png","935eddd1b073229f67770ded3223bd35"],["/medias/detail/rewardModal.jpg","b056f8c740468a78097dc25e0e1e2983"],["/medias/detail/valineBg.png","bc531b7b5667e4a26dcaa43b8e02e72f"],["/medias/detail/video.png","a86ed7a9159887fba40431654b8fad9c"],["/medias/detail/xcx.jpg","35b0a76dab99fb8de369a1934430e047"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icon.png","67a1f6317d0e539346f0306ef297938a"],["/medias/reward/alipay.png","b207e843ea1c6e1a6836701d69ea5f83"],["/medias/reward/wechat.png","24b7d5f166e57d97874fbe1497c84055"],["/medias/valineBg.png","bc531b7b5667e4a26dcaa43b8e02e72f"],["/navigate/index.html","777500dc9393f4890b67afe66a7b9aca"],["/page/2/index.html","d587c8d592da94ce8c0cce6299d15b3b"],["/posts/1.html","4092be7316caee7a7308df9f033fdcbf"],["/posts/2.html","0708d01f85ead747a64a141915de6ac8"],["/posts/3.html","e70aed5b819f54cfa9f9f8686bde2b03"],["/posts/4.html","ed2d28d22d4a4ad72f2965a144dedbf0"],["/posts/5.html","8a1848f9d269c3a1b7cd4d80be1ed415"],["/posts/6.html","64a3263cc9f3654cfb929c493f021bd6"],["/posts/7.html","8f2e162466775b5b059bfb3f3cb52773"],["/rewardModal/index.html","e78e816087b9d807e3538c8f900a9844"],["/supervise/index.html","80033e3a605660d54a1a37fe1c3557b9"],["/sw-register.js","c7534034287f819e2b2aea956be832b1"],["/tags/index.html","56ca206b1f86f78820e6360c6789aebc"],["/tags/个性化/index.html","06f5a0dd2f19baf1edc1f901a2e13041"],["/tags/久石让/index.html","021de46aa973479dfe05383ab14923f2"],["/tags/博客/index.html","590a25a1cbb89f212810e17aaa73be6c"],["/tags/搭建/index.html","2df82bbf7a4007e7fafc25506245a6d5"],["/tags/曲谱/index.html","9d36edade71be4e11e841123a5e19274"],["/tags/电脑技巧/index.html","78270bf5124e00802d89ebcd69bdffaa"],["/tags/电脑技术/index.html","1d45a954579bb6c133149fe7dc97b5ee"],["/tags/简谱/index.html","19a507cec7717053c4bae74cd135b43a"],["/tags/网页/index.html","2d7bacdb70d347eb443762feffc567bc"],["/tags/计算机/index.html","fcbb6ed85e51e79b1ccf52875d7becf3"],["/tags/请相信生活/index.html","69e74bf312cbe2632c7a319236ad2212"],["/tags/随笔/index.html","af073e5c041f15d6a6103eb3ec389153"],["/tags/音乐/index.html","5a455af8c91919f794cf0f6789037ddc"],["/tags/鼠标/index.html","5e9b539ca3a1d37e224e5c8a047282f4"],["/time/index.html","7c60c14ad0892511f969a7e8c87c61a2"],["/电脑技术/index.html","217a5129d4fbc69e89fb6ec4d0993647"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
