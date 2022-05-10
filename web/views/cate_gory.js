$(function() {
    // .content_left中的所有li绑定点击事件
    $('.content_left li').click(function() {
        // 移除li中带current的这个类
        $('.content_left li.current').removeClass('current')
            // 当前点击的li添加current这个类
        $(this).addClass('current')
            // 获取当前点击li的索引
        let index = $(this).index()
            // 隐藏
        $('.content_right').hide()
            // 通过eq找到对应的标签显示
        $('.content_right').eq(index).show()
    })
})