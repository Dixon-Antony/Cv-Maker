
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

  function switchTheme(){
    var body = document.body;
    var navContent = document.getElementById('nav-content');
    var tempMain = document.getElementById('templateMain');
    var labels = document.querySelectorAll('.template-container label');
    var inputs = document.querySelectorAll('.main input');
    var headings = document.querySelectorAll('h1');
    var span = document.getElementById('span');
    var mains = document.getElementById('mains');

    for(let input of inputs){
      input.classList.toggle('darkInput');
    }

    for(let label of labels){
      label.classList.toggle('darkLabel');
    }

    for(let heading of headings){
      heading.classList.toggle('darkHeading');
    }

    body.classList.toggle('dark-body');
    navContent.classList.toggle('navDark');
    tempMain.classList.toggle('darkTemplate');
    span.classList.toggle('spanDark');
    mains.classList.toggle('darkMain');

  }


  function getInputs(){
    return;
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


  