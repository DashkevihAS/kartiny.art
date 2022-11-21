const sliders = (slides, direction, prev, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);

        function showSlide(n) {
            if (n > items.length) {
                n = 1;
            }
        
            if (n < 1 ) {
                n = items.length;
            }
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        
        items[n - 1].style.display = 'block';
        slideIndex=n;
    }
    showSlide(slideIndex);

    function changeSlide(n) {
        slideIndex +=n;
        showSlide(slideIndex);
    }

    try {
        const btnNext = document.querySelector(next);
        const btnPrev = document.querySelector(prev);
        
        btnNext.addEventListener('click', () => {
            changeSlide(+1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

        btnPrev.addEventListener('click', () => {
            changeSlide(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

    } catch(e){}   

    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                changeSlide(+1);
                items[slideIndex - 1].classList.add('slideInUp');
            }, 3000);
        } else {
            paused = setInterval(() => {
                changeSlide(+1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    items[0].parentNode.addEventListener('mouseenter', ()=>{
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', ()=>{
        activateAnimation();
    });

};

export default sliders;