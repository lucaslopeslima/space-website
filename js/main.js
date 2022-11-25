
/* const sections = document.querySelectorAll('.section')
const menu = document.querySelectorAll('.menu')
const menuTop = document.querySelectorAll('.menu-top')
const home = document.querySelector('.home')
const destination = document.querySelector('.destination')
const crew = document.querySelector('.crew')
const tecnology = document.querySelector('.tecnology')
console.log(menuTop)
console.log(sections)
console.log(home)
console.log(destination)
console.log(crew)
console.log(tecnology) */


const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-contents')
console.log(sections)
console.log(sectBtns)
console.log(sectBtn)
console.log(allSections)
//const allSections = document.getElementById('main-content')


function pageTransitions(){
    //console.log(sections)
    //console.log(sectBtns)
    
    //Button Click Active Class
    for(let i = 0; i < sectBtn.length; i++){
        //console.log(sectBtn[i])
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }
    //Section Active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id
        console.log(id + 'esse é o id')
        
        if (id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
    //Toogle Theme
    /* const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        let backimg = document.querySelector('.img-background')
        element.classList.toggle('light-mode')
        backimg.classList.toggle('img-light')
    }) */
    //img color
    /* document.querySelector('.image').onmousemove = (e) => {

        const x = e.pageX - e.target.offsetLeft
        const y = e.pageY - e.target.offsetTop
    
        e.target.style.setProperty('--x', `${ x }px`)
        e.target.style.setProperty('--y', `${ y }px`)
        
    } */
}
pageTransitions()

