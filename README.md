# Echarts实现中国地图三级钻取

## 1、只是实现了基本功能，没有其他复杂绚丽的实现
## 2、演示地址
> 暂时在没有下级地图的时候会直接返回到第一级中国地图，后面可能改为：提示没有下级地图，然后增加一个回到一级地图的按钮

[http://front-end.dongkelun.com/echarts-map](http://front-end.dongkelun.com/echarts-map)


## 3、动图演示
> 一张一张的截图，图片太多了，就先学了一下录制gif

<!-- more -->
![](https://github.com/dongkelun/echarts-map/blob/master/asset/images/ehcarts-map.gif)

## 4、代码

> 其中地图的json数据是同事之前下载的（可能不全，几个没用的Json没有去掉），在别人的GitHub上也可以找到

代码已上传到GitHub：[https://github.com/dongkelun/echarts-map](https://github.com/dongkelun/echarts-map)


## 5、部署
>本项目为静态网页，但由于需要获取.json文件的数据，所以不能直接打开index.html（会报js的错误，可以自己试试）

将本项目复制到服务器下，如tomcat的webapps目录下，启动tomcat,然后在浏览器里输入[http://localhost:8080/echarts-map](http://localhost:8080/echarts-map)即可

因为自己在学Vue，后面可能会用Vue重新实现一下，并添加一些相对复杂的功能,比如添加数据，使每个省的颜色不一样，更多样化一些。
之所以没有先用Vue实现，也没有实现比较复杂的效果，是因为考虑到不是每个人都会Vue，所以用最简单的静态html+css+js实现，这样能使每个人都能看懂，而且可以最基础的地图钻取的模版。后面如果用Vue实现的话，会新建一个项目并上传到GitHub。
## 6、博客地址
[https://dongkelun.com/2018/11/27/echartsChinaMap/](https://dongkelun.com/2018/11/27/echartsChinaMap/)

## 7、Vue版本（更新于2019.02.20）
[https://github.com/dongkelun/vue-echarts-map](https://github.com/dongkelun/vue-echarts-map)


