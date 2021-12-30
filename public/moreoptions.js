$(document).ready(function() {
  $('#moreoptionbtn').click(function(e) {
    e.preventDefault();
    $('#answergroup').append(`<input type='text' class='form-control mt-2' name='answer' placeholder='New Option'>`);
  });
});