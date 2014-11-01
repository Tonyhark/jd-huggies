/**
 * Created by Administrator on 2014/10/30.
 */
//用户登录接口

var CONFIG = {};
//http://10.24.76.129:8080/h5sh/h5api.jsp
CONFIG.apiUrl = 'http://h5.m.jd.com/h5api.jsp';
CONFIG.path = {
    guessPrice: 'Submitpricing.html',
    order: 'activities.html'
};
CONFIG.reqData = {
    functionid: 'huggiesPriceGuessing'
};
CONFIG.loginReturnUrl = window.location.href;

// 11.9 http://sale.jd.com/app/act/AUNXG8g4dQxBWK5.html
CONFIG.pauseTime = (new Date("2014/11/09 00:00:00")).getTime() / 1000;
//11月13日
CONFIG.endTime = (new Date("2014/11/13 00:00:00")).getTime() / 1000;

var checkStatus = function (user, sid, fn) {
    var reqData = $.extend({},CONFIG.reqData);

    reqData.body = JSON.stringify({
        pin: user,
        submitted: 0
    });

    $.ajax({
        type: 'get',
        dataType: 'jsonp',
        url: CONFIG.apiUrl,
        data: reqData,
        jsonpCallback: 'response',
        success: function (res) {
            console.log(res);

            if (res.code == 0) {
                // 判断：是否过期
                var now = res.timestamp;
                if (now > CONFIG.endTime) { //最终结束
                    $('#pop_5').bPopup({
                        modalColor: 'black',
                        modalClose: false
                    });
                    return
                } else if (now > CONFIG.pauseTime) {  //中间结束
                    $('#pop_4').bPopup({
                        modalColor: 'black',
                        modalClose: false
                    });
                    return
                }

                //判断是否操作
                // 测试后需要 1改为0
                if (res.guessed == 0) { //未选择
                    //回调初始化首页
                    fn && fn(user);
                } else if (res.guessed == 1) {  //已选择
                    if (res.price == -1) {  //未猜价
                        location = CONFIG.path.guessPrice + '?sku=' + res.skuid + '&sid=' + sid;
                    } else {  // 已猜价
                        location = CONFIG.path.order + '?sku=' + res.skuid + '&sid=' + sid;
                    }
                }
            } else{
                alert('发生错误，请稍后再试')
            }
        },
        error: function (err) {
            alert('网络不稳定，休息一下，稍后试试~');
        }
    });
};
var checkLogin = function (callback, sid) {
    //'http://h5beta.m.jd.com/active/huggies/index.html'
    var selfUrl = window.location.href;
    if (sid == "") {
        window.location.href = 'http://m.jd.com/user/login.action?returnurl=' + encodeURIComponent(CONFIG.loginReturnUrl);
        return false;
    }
    //sid换?pin
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://h5.m.jd.com/h5api.jsp",
        data: {sid: sid},
        success: function (data) {
            var user = data.userPin;
            if (user) {
                //  n(user);
                return  callback ? callback(user) : "";
            }
            else {
                window.location.href = "http://m.jd.com/user/login.action?returnurl=" + encodeURIComponent(CONFIG.loginReturnUrl);
                return false;
            }
        },
        error: function () {
            alert('网络不稳定，休息一下，稍后试试~');
        }

    });
};


