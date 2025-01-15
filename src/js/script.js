"use strict";

{
  jQuery("#js-toggle").on("click", function (e) {
    e.preventDefault();
    jQuery(this).next().slideToggle();
    return false;
  });

  jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop() > 80) {
      jQuery("#js-to-top").fadeIn();
    } else {
      jQuery("#js-to-top").fadeOut();
    }
  });

  jQuery("#js-to-top").on("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 500);
  });

  jQuery(".js-modal-open").on("click", function () {
    const imgSrc = jQuery(this).attr("src");
    jQuery("#modal-img").attr("src", imgSrc);
    jQuery("#js-overlay, #js-modal").fadeIn(300);
    jQuery("body").addClass("is-fixed");
  });

  jQuery("#js-overlay").on("click", function () {
    jQuery("#js-overlay, #js-modal").fadeOut(300);
    jQuery("body").removeClass("is-fixed");
  });
}
