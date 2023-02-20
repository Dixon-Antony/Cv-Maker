
const imageInput = document.getElementById('img');
const imgField = document.getElementById('img-field');

alert('Hello');

imageInput.addEventListener('change',(e)=>{
    let file = e.target.value[0];
    let reader = new FileReader();
    reader.onloadend = () =>{
        imgField.src = reader.result;
    }
    reader.readAsDataURL(file); 

});