$(function() {
    getLesson()

    function getLesson() {
        $.ajax({
            method: 'GET',
            url: 'http://127.0.0.1:3001/getAllCourse',
            success: function(res) {
                let co = template('lesson_content', res.result)
                $('#list').html(co)
            }
        })
    }
})