// 読み込み時 Topへ
$('html,body').animate({ scrollTop: 0 }, '1');

// 読み込み時　SVG表示
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
	$("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェイドアウト
});

// Header リンク移動　処理
$(".header-link").on("click", function() {

    // クリックされた要素のhref属性の値を取得 例：#first
    const scrollTarget = $(this)[0].attributes[1].nodeValue;

    // 取得した値のid属性がついた要素の位置を取得
    const offsetTop = $(scrollTarget).offset().top;

    // 取得した箇所に移動
    $("html, body").animate({ scrollTop: offsetTop }, 500, 'swing');

    return false;
});

// Profile Fade-In
jQuery(function ($) {
        var fadeIn = $(".fade-in");
        $(window).on("scroll", function () {
          $(fadeIn).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
              $(this).addClass("scroll-in");
            }
          });
        });
      });

// Side Title Fade-IN
jQuery(function () {
        $(".title-text")
          .children()
          .addBack()
          .contents()
          .each(function () {
            if (this.nodeType == 3) {
              var $this = $(this);
              $this.replaceWith(
                $this.text().replace(/(\S)/g, "<span>$&</span>")
              );
            }
          });

        var delaySpeed = 100;
        var fadeSpeed = 500;

        var titleText = $(".title-text")
        $(window).on("scroll", function(){
            $(titleText).each(function(){
                var offset = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > offset - windowHeight + 150) {
                    $(this).addClass("active-title");
                    $(this)
                    .children("span")
                    .each(function (i) {
                        $(this)
                        .delay(i * delaySpeed)
                        .animate(
                            {
                                opacity: "1",
                            },
                            fadeSpeed
                            );
                        });
                }
            })
        })
      });

// jQuery(function(){
//   var topSection = $("#top");
//   var profile = $("#profile");
//   var portfolio = $("#portfolio");
//   var contact = $("#contact");
//   var body = $("body");

//   $(window).on("scroll", function(){
//     var t_offset = $(topSection).offset().top;
//     var pr_offset = $(profile).offset().top;
//     var po_offset = $(portfolio).offset().top;
//     var c_offset = $(contact).offset().top;

//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if(scroll > t_offset - windowHeight + 150){
//       document.body.style.backgroundColor = "#fff"
//     }else if (scroll > pr_offset - windowHeight + 150) {
//       document.body.style.backgroundColor = "#FFC400"
//     }else if (scroll > po_offset - windowHeight + 150){
//       document.body.style.backgroundColor = "#fff"
//     }else if(scroll > c_offset - windowHeight + 150){
//       document.body.style.backgroundColor = "#43A047"
//     }
//   })
// })