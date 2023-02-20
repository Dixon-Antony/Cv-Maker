
function previewFile() {
    var preview = document.getElementById('fimg');
    var file    = document.querySelector('input[type=file]').files[0];
    var templateImg = document.getElementById('timg');
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
      templateImg.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "assets/img/default.jpg";
    }
  }




    window.onload = () =>{
      var gen = document.getElementById('generate');
      gen.addEventListener('click',function(e){
        e.preventDefault();
        var template = document.querySelector('.template-container');
        template.classList.toggle('show-template');
        gen.style.pointerEvents='none';
        gen.style.backgroundColor='#222';
      });
    };


  