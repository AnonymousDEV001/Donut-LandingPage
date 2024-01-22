$(document).ready(function () {
  $(".circle").css({
    "background-color": "#fe5f69",
  });
  $(".shop-btn").css({
    "background-color": "#fe5f69",
  });

  let text = [
    "Strawberry Donut",
    "Biscuit Donut",
    "Chocolate Donut",
    "Happy Donut",
  ];
  $("#textChange").text(text[0]);

  $("#img1").click(function () {
    $("#img1").css({
      transform: "translate(-18rem, 0rem) rotate(90deg)",
      width: "20rem",
    });

    $("#img2").css({
      transform: "translate(0rem, 0rem)",
      width: "10rem",
    });
    $("#img3").css({
      transform: "translate(0rem, 12rem)",
      width: "12rem",
    });
    $("#img4").css({
      transform: "translate(0rem, -12rem) rotate(90deg)",
      width: "12rem",
    });
    $(".circle").css({
      "background-color": "#d6bea9",
    });
    $(".shop-btn").css({
      "background-color": "#d6bea9",
    });

    $("#textChange").css({
      transform: "translateX(-35rem)",
    });
    setTimeout(function () {
      $("#textChange").text(text[1]);
      $("#textChange").css({
        transform: "translateX(0rem)",
      });
    }, 350);
  });

  $("#img4").click(function () {
    $("#img1").css({
      transform: "translate(0rem, -12rem)",
      width: "12rem",
    });
    $("#img2").css({
      transform: "translate(0rem, 0rem)",
      width: "10rem",
    });
    $("#img3").css({
      transform: "translate(0rem, 12rem)",
      width: "12rem",
    });
    $("#img4").css({
      transform: "translate(-18rem, 0rem)",
      width: "20rem",
    });
    $(".circle").css({
      "background-color": "#fe5f69",
    });
    $(".shop-btn").css({
      "background-color": "#fe5f69",
    });

    $("#textChange").css({
      transform: "translateX(-35rem)",
    });
    setTimeout(function () {
      $("#textChange").text(text[0]);
      $("#textChange").css({
        transform: "translateX(0rem)",
      });
    }, 350);
  });

  $("#img2").click(function () {
    $("#img2").css({
      transform: "translate(-18rem, 0rem) rotate(90deg)",
      width: "20rem",
    });
    $("#img1").css({
      transform: "translate(0rem, 0rem)",
      width: "10rem",
    });
    $("#img3").css({
      transform: "translate(0rem, 12rem)",
      width: "12rem",
    });
    $("#img4").css({
      transform: "translate(0rem, -12rem) rotate(90deg)",
      width: "12rem",
    });
    $(".circle").css({
      "background-color": "#785420",
    });
    $(".shop-btn").css({
      "background-color": "#785420",
    });
    $("#textChange").css({
      transform: "translateX(-35rem)",
    });
    setTimeout(function () {
      $("#textChange").text(text[2]);
      $("#textChange").css({
        transform: "translateX(0rem)",
      });
    }, 350);
  });
  $("#img3").click(function () {
    $("#img3").css({
      transform: "translate(-18rem, 0rem) rotate(90deg)",
      width: "20rem",
    });
    $("#img2").css({
      transform: "translate(0rem, 0rem)",
      width: "10rem",
    });
    $("#img1").css({
      transform: "translate(0rem, 12rem)",
      width: "12rem",
    });
    $("#img4").css({
      transform: "translate(0rem, -12rem) rotate(90deg)",
      width: "12rem",
    });
    $(".circle").css({
      "background-color": "#e29ed2",
    });
    $(".shop-btn").css({
      "background-color": "#e29ed2",
    });
    $("#textChange").css({
      transform: "translateX(-35rem)",
    });
    setTimeout(function () {
      $("#textChange").text(text[3]);
      $("#textChange").css({
        transform: "translateX(0rem)",
      });
    }, 350);
  });
});
