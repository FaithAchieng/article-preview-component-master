const icon=document.getElementById('icon');
const show=document.getElementById('show');
icon.addEventListener('click', function(e){
    if(show.style.display=='none'){
        show.style.display='block';
    }
    else{
        show.style.display='none';
    }
})