var x = document.querySelector('.state');

for (var i = 0; i < 11; i++){
    x[i].addEventListener('click', hideText, false);
}

function hideText(e){
    if(x.style.visibility === 'hidden'){
        x.style.visibility = '';
    } else {
        x.style.visibility = 'visible';
    }
};
