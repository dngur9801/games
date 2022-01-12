$(function () {
  $('#top_search').click(function () {
    $('.menu_wrap').slideToggle();
  });
  $('#top_menu').click(function () {
    $('.slide_menu').stop().animate(
      {
        left: 0,
      },
      500
    );
    $('.black_screen').css('height', '100%');
  });

  $('.close').click(function () {
    $('.black_screen').css('height', '0');
    $('.slide_menu').stop().animate(
      {
        left: '-500px',
      },
      500
    );
  });

  $('.floor').click(function () {
    $('html').stop().animate(
      {
        scrollTop: 0,
      },
      300
    );
  });

  $.ajax({
    url: './json/qanda.json',
    cache: false,
    type: 'GET',
    dataType: 'JSON',
    success: function ($a, $b) {
      $.fn.qanda($a);
    },
    error: function () {
      console.log('통신에러');
    },
  });

  $.fn.qanda = function ($data) {
    $($data).each(function ($a1, $a2) {
      if ($a2['q_subject'].length > 11) {
        $a2['q_subject'] = $a2['q_subject'].substr(0, 11) + '...';
      }
      const $span1 = '<span>' + $a2['q_subject'] + '</span>';
      const $span2 = '<span>' + $a2['q_date'] + '</span>';
      $('.question > ul > li').eq($a1).append($span1);
      $('.question > ul > li').eq($a1).append($span2);
    });
  };
});
