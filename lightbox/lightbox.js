jQuery(function ($) {

  $('.lightbox_trigger').on('click', function (e) {
    e.preventDefault();

    var image_href = $(this).attr('href');

    if ($('#lightbox').length) {
      $('#content img').attr('src', image_href);
      $('#lightbox').show();
    } else {
      var lightbox =
        '<div id="lightbox">' +
          '<p>Click anywhere to close</p>' +
          '<div id="content">' +
            '<img src="' + image_href + '">' +
          '</div>' +
        '</div>';

      $('body').append(lightbox);
    }
  });

  $('body').on('click', '#lightbox', function () {
    $('#lightbox').hide();
  });

});
