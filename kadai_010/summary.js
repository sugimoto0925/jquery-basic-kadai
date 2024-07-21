$(function () {

  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
  // 赤色にする
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
  // Helloにする
    $('#target').text('Hello');
  });

  // id属性がfadeOutの要素がクリックされたら
  $('#fade-out').on('click', function() {
  // フェードアウトする
    $('#target').fadeOut();
  });

  // id属性がfadeInの要素がクリックされたら
  $('#fade-in').on('click', function() {
  // フェード`インする
    $('#target').fadeIn();
  });

});