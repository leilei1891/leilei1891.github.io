var posts=["p/2022/60258585/","p/2022/41149534/","p/2022/f607d2b5/","p/2021/ea8fe0c4/","p/2021/3f81df2e/","p/2023/7cb564cd/","p/2023/ea2479bd/","p/2022/250970e4/","p/2022/68adcea5/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};