const parallaxDivs = document.querySelectorAll('.is-parallax');

const handleScroll = () => {
    let vensterTop = window.pageYOffset;
    for (i = 0; i < parallaxDivs.length; i++){

        if (vensterTop <= 0){
            vensterTop = 0;
        }
        parallaxDivs[i].style.backgroundPosition = 'center ' + -vensterTop*0.2 + 'px';
    }
}

window.addEventListener('scroll', handleScroll);
