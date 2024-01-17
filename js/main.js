let sectiontop = $("#abouttitle").offset().top;

$(window).on("scroll", function () {
  let windowscroll = $(window).scrollTop();
  if (windowscroll > sectiontop - 100) {
    $(".nav").css("backgroundColor", "#ccc");
  } else {
    $(".nav").css("backgroundColor", "white");
  }
});

// $("body").animate({ scrollTop: "200px" }, 1000);

// $("#Chefs").on("click", function () {
//   let sectiontop = $("#abouttitle").offset().top;
//   console.log(sectiontop);
//   $("body").animate({ scrollTop: sectiontop }, 2000);
// });
// $("a").on("click", function (e) {
//   console.log(e.target.getAttribute("href"));
//   let sectiontop = $("#abouttitle").offset().top;
//   console.log(sectiontop);
//   $("body").animate({ scrollTop: sectiontop }, 2000);
// });

$(function () {
  //لما الصفحه تحمل
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

$("#icon").on("click", function () {
  $(".sidebar-box").animate({ width: "toggle", paddingInline: "toggle" }, 1000);
});
$(".box-color").eq(0).css("backgroundColor", "red");
$(".box-color").eq(1).css("backgroundColor", "green");
$(".box-color").eq(2).css("backgroundColor", "black");
$(".box-color").eq(3).css("backgroundColor", "orang");
$(".box-color").eq(4).css("backgroundColor", "blue");

$(".box-color").on("click", function (e) {
  let currentcolor = $(e.target).css("backgroundColor");
  console.log(currentcolor);
  $("h2,p").css("color", currentcolor);
});
