$(document).ready(function() {
  $(".card").click(function() {
    $(this.children).toggle();
  });
});
