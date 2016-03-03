


$(document).ready(function() {

  $('#web,#image,#audio').hide();
    $('.webicon').click(function(){
      $('#web').show('slow');
      $('.web').toggleClass('animated fadeInUp');
  });
  $('.imagicon').click(function(){
    $('#image').show('slow');
    $('.image').toggleClass('animated fadeInUp');
  });
  $('.musicon').click(function(){
    $('#audio').show('slow');
    $('.audio').toggleClass('animated fadeInUp');
  });
});

$(document).ready(function() {
  var savoirs = $('savoirs h3').text();
  $('#web img, #image img, #audio img').mouseout(function() {
      $('#what').text('Savoirs');
    $('#what').css('background-color', 'rgba(11, 11, 11, 0.68)');
  });
  $('#web img:nth-child(1)').mouseover(function() {
    $('#what').text('HTML5');
    $('#what').css('background-color', 'red');
  });
  $('#web img:nth-child(2)').mouseover(function() {
    $('#what').text('CSS3');
    $('#what').css('background-color', 'blue');
  });
  $('#web img:nth-child(3)').mouseover(function() {
    $('#what').text('JavaScript');
    $('#what').css('background-color', 'yellow');
  });
  $('#web img:nth-child(4)').mouseover(function() {
    $('#what').text('jQuery');
    $('#what').css('background-color', 'blue');
  });
  $('#web img:nth-child(5)').mouseover(function() {
    $('#what').text('AngularJs');
    $('#what').css('background-color', 'red');
  });
  $('#image img:nth-child(1)').mouseover(function() {
    $('#what').text('Photoshop');
    $('#what').css('background-color', 'blue');
  });
  $('#image img:nth-child(2)').mouseover(function() {
    $('#what').text('Première Pro');
      $('#what').css('background-color', 'purple');
  });
  $('#image img:nth-child(3)').mouseover(function() {
    $('#what').text('Final Cut pro X');
    $('#what').css('background-color', '#CC1F42');
  });
  $('#audio img:nth-child(1)').mouseover(function() {
    $('#what').text('Ableton Live');
      $('#what').css('background-color', '#2b67c1');
  });
  $('#audio img:nth-child(2)').mouseover(function() {
    $('#what').text('Logic Pro X');
    $('#what').css('background-color', '#674c87');
  });
  $('#audio img:nth-child(3)').mouseover(function() {
    $('#what').text('Cubase');
      $('#what').css('background-color', 'red');
  });

});
