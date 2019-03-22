## 知识回顾：
     1.css的三种写法：行内、内嵌、外链
     2.css的选择器：三种基本的选择器：标签、类、ID
     
 ```angular2html
<p class="p1"></p> 
<p id="p1"></p>
<style>
.p1{}
#p1{}
</style>
```    
    3、样式的常属性：
    颜色（文字或文本）:color skyblue/#aa11199/#a19/rgb(255,0,0)/rgba(0,0,0,0)
    文字：font-size/fong-weight/font-style
    文本：text-align/line-height/text-indent(em)/letter-spacing
    背景：bacckground-color/background-image/background-repeat/
    background-position(图片精灵)
    边框:border-style/border-width/border-color
    列表：list-style-type/list-style-image/list-style-position
    
    4、CSS核心技术
    （1）盒子模型：width/height/padding/border/margin
     (2)浮动：脱离文档流，块级元素同一行显示：
     (3)定位：
         相对定位：不脱离文档流，参考点是自身原本的位置
         绝对定位：脱离文档流，参考点是浏览器的左顶点
         因定定位：参考点在浏览可见窗口的左顶点
     (4)显示层级：z-index 必须先定位
     (5)溢出：overflow    
### 目标：
     完成钢琴的页面结构搭建和样式设计
     
### 一、jQuery使用原则
    1、要使用jQuery框架，必须引入该框架文件：
    jQuery引入的语法；
       通过script标签的scr属性，引入jQuery文件、并且是写在外链式样式文件
       的下方：
    2、jQuery的语法：
    $();
    $-->jQuery
    () -->需要进行处理的功能代码
### 二、jQuery案例用到的方法
    1、fadeOut()
        参数：通常只需要设置一个时间参数，注意，时间用的是毫秒数，1秒等于1000毫秒
           
            
     
     
         