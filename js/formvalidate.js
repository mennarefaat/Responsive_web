(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  $("#pricing .nav-link").click(function(e){
    $("#pricing .nav-link").each(function(i,e){$(e).removeClass("active");});
    
    $(this).addClass("active");e.preventDefault();


});//end of navlink
$('#saveN').click(function(e){
    $("#hellow").html($("#name").val())
})
 let images=document.querySelectorAll(".imges")
 let ps=document.querySelectorAll(".p1")
 for(let i=0 ;i<=images.length;i++){
    images[i].addEventListener("click",function(){
      $(".p1").removeClass('show')
      ps[i].classList.add('show')
    })
 }