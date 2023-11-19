document.addEventListener('scroll', () => {
    const home1 = document.querySelector ('.container-home .left');
    const home2 = document.querySelector ('.container-home .right');

    const service1 = document.querySelector ('.container-service .title')
    const service2 = document.querySelector ('.container-service .content')
    
    const shop1 = document.querySelector ('.container-shop section')
    const shop2 = document.querySelector ('.container-shop .content')
    
    const about = document.querySelector ('.container-about')
    
    const footer = document.querySelector ('footer .top')

    if (window.scrollY > 1) {
        home1.classList.add('animate__fadeInUp')
        home2.classList.add('animate__fadeInUp')
    }
    if (window.scrollY > 700) {
        service1.classList.add('animate__fadeInUp')
        service2.classList.add('animate__fadeInUp')
    }else{
        service1.classList.remove('animate__fadeInUp')
        service2.classList.remove('animate__fadeInUp')
    }
    if (window.scrollY > 1400) {
        shop1.classList.add('animate__fadeInUp')
        shop2.classList.add('animate__fadeInUp')
    }else{
        shop1.classList.remove('animate__fadeInUp')
        shop2.classList.remove('animate__fadeInUp')
    }
    if (window.scrollY > 2400) {
        about.classList.add('animate__fadeInUp');
    }else{
        about.classList.remove('animate__fadeInUp')
    }
    if (window.scrollY > 2890) {
        footer.classList.add("animate__fadeInUp");
    } else {
        footer.classList.remove("animate__fadeInUp");
    }
})