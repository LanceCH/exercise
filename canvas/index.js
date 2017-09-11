var canvasDiv = document.getElementById("draw");
//判断浏览器支持canvas元素
if(canvasDiv.getContext){
    //取得绘图上下文对象
    var context = canvasDiv.getContext("2d");
    context.beginPath();
    context.translate(100,100);
    context.arc(0, 0, 99, 0, 2 * Math.PI, false);//绘制圆
    context.moveTo(94, 0);
    context.arc(0, 0, 94, 0, 2 * Math.PI, false);

    context.rotate(2);//旋转画布
    context.moveTo(0, 0);
    context.lineTo(0, -85);//创建一个新点
    context.moveTo(0, 0);
    context.lineTo(-65, 0);

    context.stroke();

}