
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

const main = document.querySelector('#main')
const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-contents')
console.log(sections)
console.log(sectBtns)
console.log(sectBtn)
console.log(allSections)


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
        console.log(id + ' esse é o id')
        
        if (id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('sec-active')
            })
            e.target.classList.add('sec-active')
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('sec-active')
            })
            const element = document.getElementById(id)
            element.classList.add('sec-active')
        }
        if(id == 'home'){
            console.log('mudar bg do main')
            main.style.cssText = "background-image: url('../assets/home/background-home-desktop.jpg');"
        }
        if(id == 'destination'){
            main.style.cssText = "background-image: url('../assets/destination/background-destination-desktop.jpg');"
        }
        if(id == 'crew'){
            main.style.cssText = "background-image: url('../assets/crew/background-crew-desktop.jpg');"
        }
        if(id == 'tecnology'){
            main.style.cssText = "background-image: url('../assets//technology/background-technology-desktop.jpg');"
        }
    })
}
pageTransitions()

