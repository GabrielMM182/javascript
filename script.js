function init(){

const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent section');

if(tabmenu.length && tabcontent.length) {


    tabcontent[0].classList.add('ativo');

    function activetab(index) {
        tabcontent.forEach((section)=>{
            section.classList.remove('ativo');
        });
        tabcontent[index].classList.add('ativo');
    }

    tabmenu.forEach((itemmenu , index) =>{
        itemmenu.addEventListener('click' , function(){
            activetab(index);
        })
    });

}
}

init();


function initt () {
const accordionList = document.querySelectorAll('.js-accordion dt');

accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');


function activeaccordion() {
    this.classList.add('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeaccordion);
})
}

initt();


function scrol() {
    const linkinterno = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        const section = document.querySelector(href);

        // primieira forma de fazer o scroll funcionar 
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });


        // segunda forma de fazer o scroll funcionar 
        //const topo = section.offsetTop;
        
        //window.scrollTo({
        //    top: topo,
        //    behavior: 'smooth'
        //});
    }

    linkinterno.forEach((link)=>{
        link.addEventListener('click',scrollToSection);
    })
}

scrol();


function intre() {

    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.6;

    function animascroll() {
        sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top;
            const isvisi = (sectionTop - windowMetade) < 0;
            if(isvisi) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        })
    }

    animascroll();

    window.addEventListener('scroll' , animascroll);
    }

intre();