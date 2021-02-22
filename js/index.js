var orientation;
//页面加载时调用
orient();
//用户变化屏幕方向时调用
$(window).bind('orientationchange', function(e) {
    orient();
});

function orient() {
    if (window.orientation == 90 || window.orientation == -90) {
        //横屏
        // alert(1);
        $('.landscape').fadeOut();
        $('.loading').fadeIn();
        orientation = 'landscape';
        return false;
    } else if (window.orientation == 0 || window.orientation == 180) {
        //竖屏
        // alert(2);
        // $('.landscape').show();
        // $('.loading').hide();
        orientation = 'portrait';
        return false;
    }
}

// loading
// console.log($('.load-line::after'));

var i = 1;
var timer = setInterval(function() {
    i++;
    $('.load-line .after').width(i + '%');

    $('.num').html(i + '%')
    if (i >= 100) {
        i = 99;
        clearInterval(timer);
        $('.loading').fadeOut();
        $('.expo').fadeIn();
    }
}, 50);

// 博览会

var timer1 = setInterval(function() {
    clearInterval(timer1);
    $('.shake').fadeIn();
    // $('.shake').animate(shake, 1, linear, infinite);
}, 8000);

// 摇一摇

var timer2 = setInterval(function() {
    clearInterval(timer1);
    $('.shake').hide();
    $('.expo').animate({ top: '-300px' });
    $('.jar').hide();
    $('.jars').show();
    $('.jars').animate({ top: '430' });
    $('.tz').css('marginTop', 170);
    var timer3 = setInterval(function() {
        clearInterval(timer2);
        $('.jars').fadeOut();
        $('.jars1').fadeIn();
    }, 820);
    var timer5 = setInterval(function() {
        clearInterval(timer3);
        $('.jars1').fadeOut();
        $('.jars2').fadeIn();
    }, 850);
    var timer4 = setInterval(function() {
        clearInterval(timer5);
        clearInterval(timer4);
        clearInterval(timer2);
        $('.jars2').fadeOut();
        $('.jars3').fadeIn();
        $('.yan').fadeIn();
    }, 900);
}, 10000);


// 制作属于你的茅台酒 start 
var timer6 = setInterval(function() {
    clearInterval(timer6);
    $('.oneself').show();
    $('.expo').hide();
}, 15000);

var nums = 0;
$('.centre').click(function() {
    nums++;
    if (nums == 6) {
        nums = 5;
    } else {
        $('.jdts').height(nums * 20 + '%');
        $('.one p span').html(nums * 20);
    }
    console.log(nums);
});
$('.oneself-cont .btn').click(function() {
    $('.page1').hide();
    $('.page2').show();
});
$('.page2-cont .btn').click(function() {
    $('.page2').hide();
    $('.page3').show();
});

// page3
$('.page3 .btn').click(function() {
    $('.page3').hide();
    $('.page4').show();
});

// page4
$('.page4 .btn').click(function() {
    $('.page4').hide();
    $('.page5').show();
});

// page5
$('.page5 .btn').click(function() {
    $('.page5').hide();
    $('.page6').show();
});

// page6
$('.page6 .btn2').click(function() {
    $('.page6').hide();
    $('.page7').show();
});

// 制作属于你的茅台酒 end