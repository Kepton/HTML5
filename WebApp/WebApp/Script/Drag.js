function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    //数据类型是 "Text"，值是可拖动元素的 id ("drag1")
    ev.dataTransfer.setData("Text", ev.target.id);
}


/*代码解释：
调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）
通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。
被拖数据是被拖元素的 id ("drag1")
把被拖元素追加到放置元素（目标元素）中*/
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}