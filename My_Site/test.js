//显示：
$(".left_slide_center_nav").addClass("show");


//点击蒙层关闭：
$(".left_slide_center_nav").on("click", ".center_mask", function() {

    //隐藏：
    $(".left_slide_center_nav").removeClass("show");

});