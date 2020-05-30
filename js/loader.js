$(document).ready(function () {
  $(".modal").modal();
  $('.sidenav').sidenav();
  $('.slider').slider({
    full_width: true,
    dragged:true,
    pressed:true
  });
});

function toggleModal() {
  let instance = M.Modal.getInstance($("#modal1"));
  instance.open();
}
function toggleModalError() {
  let instance = M.Modal.getInstance($("#modal2"));
  instance.open();
}
