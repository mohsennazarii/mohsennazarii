$(document).ready(function () {
  AOS.init({});
});

const browserInfo = navigator.userAgent;
isChrome = browserInfo.includes("Chrome");

if (!isChrome) {
  $("a.smooth-scroll").on("click", function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          0,
          function () {
            var $target = $(target);
            $target.trigger("focus");
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr("tabindex", "-1");
              $target.trigger("focus");
            }
          }
        );
      }
    }
  });
}
