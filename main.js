let slideImg = document.querySelectorAll('.inner-slider img'),
    arrowLeft = document.querySelector('.prev'),
    arrowRight = document.querySelector('.next'),
    current = 0;
//Clear all Images
    function reset(){
        for(let i = 0; i < slideImg.length; i++){
            slideImg[i].style.display = 'none';
        }
    }

    //Initializes the starter
    function startSlide(){
        reset();
        slideImg[0].style.display = 'inline-block';
    }

    //Show previous 
    function slideLeft(){
        reset();
        slideImg[current - 1].style.display = 'inline-block';
        current--;
    }

    //Show Next
    function slideRight(){
        reset();
        slideImg[current + 1].style.display = 'inline-block';
        current++;
    }

    //Left arrow click
    arrowLeft.addEventListener('click', function(){
        if(current === 0){
            current = slideImg.length;
        }
        slideLeft();
    });

    //Right arrow Click
    arrowRight.addEventListener('click', function(){
        if(current === slideImg.length - 1){
            current = -1
        }
        slideRight();
    });
    
    startSlide();