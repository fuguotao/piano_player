'use strict';
$(function () {
   $("#btn_play").click(function () {
       /**
        * 点击按钮后隐藏视频和按钮本身
        * @type {jQuery.fn.init|jQuery|HTMLElement}
        * @private
        */
       var _t = $(this);
       $("video").fadeOut(1500,function () {
       }).get(0).pause();
       _t.fadeOut(1500);
   });
    $(".piano_key>li").click(function () {
        var _t = $(this);
        _t.children("audio").get(0).play();
        if(_t.children("img").hasClass("current")){
            _t.children("img").removeClass("opcaity1 current");
            setTimeout(function () {
                _t.children("img").addClass("opcaity1 current");
            },50)
        }else {
            _t.children("img").addClass("opcaity1 current");
        }
    });
    $(".piano_key>li").mousedown(function () {
        $(this).addClass("li_mousedown");
    }).mouseup(function () {
        $(this).removeClass("li_mousedown");
    });
    /**
     *
     * @param keyCode Number
     * @param isKeydown  Boolean
     */
    function pianoVoice(keyCode,isKeydown){
        switch (keyCode) {
            //键盘1键
            case 49:
            //键盘2键
            case 50:
            //键盘3键
            case 51:
            //键盘4键
            case 52:
            //键盘5键
            case 53:
            //键盘6键
            case 54:
            //键盘7键
            case 55:
            //键盘8键
            case 56:
                var _li = $(".piano_key>li").eq(keyCode-49);
                if(isKeydown){
                    _li.addClass("li_mousedown")
                        .children("audio").get(0).play();
                    if(_li.children("img").hasClass("current")){
                        _li.children("img").removeClass("opcaity1 current");
                        setTimeout(function () {
                            _li.children("img").addClass("opcaity1 current");
                        },50)
                    }else {
                        _li.children("img").addClass("opcaity1 current");
                    }
                }else {
                    _li.removeClass("li_mousedown")
                        .children("audio").get(0).pause();
                    _li.children("audio").get(0).load();
                }
                break;
        }
    }
    $(document).keydown(function (event) {
        pianoVoice(event.keyCode,true);
    });
    $(document).keyup(function (event) {
        pianoVoice(event.keyCode,false);
    })
});
