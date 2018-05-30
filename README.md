# 前端学习

## 基本技术

* HTML (超文本标记语言) --网页内容
* CSS (样式控制) --网页布局
* Javascript (逻辑控制) --网页行为

### CSS

**样式分三种形式**

1. 文件引用形式。通过<link href="xxx.css">来引用。
2. 写到html文件 <style> 标签里。
3. 行内样式，内联样式 (直接写到DOM节点上，优先级最高)

通过 !important 可以改变优先级。

id -- 唯一
class -- 不唯一

#### 浏览器差异

使用normalize.css，reset.css进行样式统一和重置。

### Javascript

引用方式：

1. 文件引用。通过script标签引入。
2. html文件内写在script标签内。
eg 显示数据有几种形式：
 1. window.alert() 弹出警告框
 2. documetn。write（）将内容写到html中，直接调用了参数，输出内容。
 3. innerHTML   写入到html元素，改变定义参数的内容。
 4. console.log（）写入到浏览器控制台，浏览器检查中console.log显示输出（经常用于调试）
 

