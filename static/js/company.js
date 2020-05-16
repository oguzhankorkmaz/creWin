nav = 0;

$("#rNav").click(function () {
    nav = nav + 1;
    if (nav % 2 == 1) {
        $(" .nav-temp > .container > .nav").css("display", "inline").css("height", "auto");
    } else {
        $(" .nav-temp > .container > .nav").css("display", "none").css("height", "0");
    }
})

rb1 = 0
$(".rb1").click(function () {
    rb1 = rb1 + 1;
    if (rb1 % 2 == 1) {
        $(".rb1").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb1").css("background-color", "unset").css("color", "unset")
    }
})

rb2 = 0
$(".rb2").click(function () {
    rb2 = rb2 + 1;
    if (rb2 % 2 == 1) {
        $(".rb2").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb2").css("background-color", "unset").css("color", "unset")
    }
})


rb3 = 0
$(".rb3").click(function () {
    rb3 = rb3 + 1;
    if (rb3 % 2 == 1) {
        $(".rb3").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb3").css("background-color", "unset").css("color", "unset")
    }
})

rb4 = 0
$(".rb4").click(function () {
    rb4 = rb4 + 1;
    if (rb4 % 2 == 1) {
        $(".rb4").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb4").css("background-color", "unset").css("color", "unset")
    }
})

rb5 = 0
$(".rb5").click(function () {
    rb5 = rb5 + 1;
    if (rb5 % 2 == 1) {
        $(".rb5").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb5").css("background-color", "unset").css("color", "unset")
    }
})

rb6 = 0
$(".rb6").click(function () {
    rb6 = rb6 + 1;
    if (rb6 % 2 == 1) {
        $(".rb6").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb6").css("background-color", "unset").css("color", "unset")
    }
})

rb7 = 0
$(".rb7").click(function () {
    rb7 = rb7 + 1;
    if (rb7 % 2 == 1) {
        $(".rb7").css("background-color", "#2398ab").css("color", "white")
    } else {
        $(".rb7").css("background-color", "unset").css("color", "unset")
    }
})

$(document).ready(function () {

    window.onscroll = function () {
        lcScroll()
    }

    var lc1 = document.getElementById("lc-1");
    var lc1Sticky = lc1.offsetTop;

    var lc2 = document.getElementById("lc-2");
    var lc2Sticky = lc2.offsetTop;

    var lc3 = document.getElementById("lc-3");
    var lc3Sticky = lc3.offsetTop;

    function lcScroll() {
        if (window.pageYOffset + 1024 > lc1Sticky) {
            $(".lc-c1").css("right", "0")
        }

        if (window.pageYOffset + 1024 > lc2Sticky) {
            $(".lc-c2").css("right", "0")
        }

        if (window.pageYOffset + 1024 > lc3Sticky) {
            $(".lc-c3").css("right", "0")
        }
    }
})

$(".pagination> li:nth-child(1)").click(function () {
    $(this).addClass("active")
    $(".pagination> li:nth-child(2)").removeClass("active");
    $(".pagination> li:nth-child(3)").removeClass("active");
    $(".pagination> li:nth-child(4)").removeClass("active");
    $(".pagination> li:nth-child(5)").removeClass("active");
})
$(".pagination> li:nth-child(2)").click(function () {
    $(this).addClass("active")
    $(".pagination> li:nth-child(1)").removeClass("active");
    $(".pagination> li:nth-child(3)").removeClass("active");
    $(".pagination> li:nth-child(4)").removeClass("active");
    $(".pagination> li:nth-child(5)").removeClass("active");
})
$(".pagination> li:nth-child(3)").click(function () {
    $(this).addClass("active")
    $(".pagination> li:nth-child(1)").removeClass("active");
    $(".pagination> li:nth-child(2)").removeClass("active");
    $(".pagination> li:nth-child(4)").removeClass("active");
    $(".pagination> li:nth-child(5)").removeClass("active");
})
$(".pagination> li:nth-child(4)").click(function () {
    $(this).addClass("active")
    $(".pagination> li:nth-child(1)").removeClass("active");
    $(".pagination> li:nth-child(2)").removeClass("active");
    $(".pagination> li:nth-child(3)").removeClass("active");
    $(".pagination> li:nth-child(5)").removeClass("active");
})
$(".pagination> li:nth-child(5)").click(function () {
    $(this).addClass("active")
    $(".pagination> li:nth-child(1)").removeClass("active");
    $(".pagination> li:nth-child(2)").removeClass("active");
    $(".pagination> li:nth-child(3)").removeClass("active");
    $(".pagination> li:nth-child(4)").removeClass("active");
})