
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
        //console.log(id + ' esse é o id')
        
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

//const sectBtn = document.querySelectorAll('.control')
const dMenu = document.querySelectorAll('.d-menu')
let destinationContent = document.querySelector('.destination-content')
let dContent = document.getElementById('dContent')
console.log(dMenu + ' d-menu')
console.log(destinationContent)
console.log(dContent)

function dMenuTrasitions(){
    for(let i = 0; i < dMenu.length; i++){
        //console.log(sectBtn[i])
        dMenu[i].addEventListener('click', function(){
            let currentdMenu = document.querySelectorAll('.destination-btn')
            currentdMenu[0].className = currentdMenu[0].className.replace('destination-btn', '')
            this.className += ' destination-btn'
            
        })
    }
    
    dContent.addEventListener('click', (e) =>{
        const id = e.target.id
        console.log(id + ' esse é o id')
            if (id == 'moon'){
                console.log('passou')
                destinationContent.innerHTML = '<div class="destination-img"><img src="assets/destination/image-moon.webp" alt=""></div><div class="destination-container"><nav class="destination-menu"><div class="d-menu destination-btn" id="moon">Moon</div><div class="d-menu " id="mars">Mars</div><div class="d-menu " id="europa">Europa</div><div class="d-menu " id="titan">Titan</div></nav><div class="destination-txt"><h2 class="destination-title">Moon</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure commodi quibusdam ratione, debitis illo, ea dicta obcaecati iste provident est architecto quam quidem suscipit excepturi dolorum ullam laborum voluptatem?</p><div class="destination-line"></div><div class="destination-info"><div class="destination-distance"><span>AVG. distance</span><h2>384.400 Km</h2></div><div class="destination-travel-time"><span>est. travel time</span><h2>3 days</h2></div></div></div><!--destination-txt--></div><!-- /.destination-container -->'
            }
            if(id == 'mars'){
                console.log('passou')
                //destinationContent.innerHTML = '<div>ola</div>'
                destinationContent.innerHTML = '<div class="destination-img"><img src="assets/destination/image-mars.webp" alt=""></div><div class="destination-container"><nav class="destination-menu"><div class="d-menu " id="moon">Moon</div><div class="d-menu destination-btn" id="mars">Mars</div><div class="d-menu " id="europa">Europa</div><div class="d-menu " id="titan">Titan</div></nav><div class="destination-txt"><h2 class="destination-title">Mars</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure commodi quibusdam ratione, debitis illo, ea dicta obcaecati iste provident est architecto quam quidem suscipit excepturi dolorum ullam laborum voluptatem?</p><div class="destination-line"></div><div class="destination-info"><div class="destination-distance"><span>AVG. distance</span><h2>225 mil Km</h2></div><div class="destination-travel-time"><span>est. travel time</span><h2>9 months</h2></div></div></div><!--destination-txt--></div><!-- /.destination-container -->'
            }
            if(id == 'europa'){
               destinationContent.innerHTML = '<div class="destination-img"><img src="assets/destination/image-europa.webp" alt=""></div><div class="destination-container"><nav class="destination-menu"><div class="d-menu " id="moon">Moon</div><div class="d-menu " id="mars">Mars</div><div class="d-menu destination-btn" id="europa">Europa</div><div class="d-menu " id="titan">Titan</div></nav><div class="destination-txt"><h2 class="destination-title">Europa</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure commodi quibusdam ratione, debitis illo, ea dicta obcaecati iste provident est architecto quam quidem suscipit excepturi dolorum ullam laborum voluptatem?</p><div class="destination-line"></div><div class="destination-info"><div class="destination-distance"><span>AVG. distance</span><h2>268 mil Km</h2></div><div class="destination-travel-time"><span>est. travel time</span><h2>3 years</h2></div></div></div><!--destination-txt--></div><!-- /.destination-container -->'
            }
            if(id == 'titan'){
                console.log(this.id)
                destinationContent.innerHTML = '<div class="destination-img"><img src="assets/destination/image-titan.webp" alt=""></div><div class="destination-container"><nav class="destination-menu"><div class="d-menu " id="moon">Moon</div><div class="d-menu " id="mars">Mars</div><div class="d-menu " id="europa">Europa</div><div class="d-menu destination-btn" id="titan">Titan</div></nav><div class="destination-txt"><h2 class="destination-title">Titan</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure commodi quibusdam ratione, debitis illo, ea dicta obcaecati iste provident est architecto quam quidem suscipit excepturi dolorum ullam laborum voluptatem?</p><div class="destination-line"></div><div class="destination-info"><div class="destination-distance"><span>AVG. distance</span><h2>1.6 bil Km</h2></div><div class="destination-travel-time"><span>est. travel time</span><h2>7 years</h2></div></div></div><!--destination-txt--></div><!-- /.destination-container -->'
            }
        
    })
}
dMenuTrasitions()  







const tMenu = document.querySelectorAll('.t-menu')
let tecnologyContent = document.querySelector('.tecnology-content')
let tContent = document.getElementById('tContent')
console.log(tMenu + ' t-menu')
console.log(tecnologyContent)
console.log(tContent)


function tMenuTrasitions(){
    for(let i = 0; i < tMenu.length; i++){
        tMenu[i].addEventListener('click', function(){
            let currenttMenu = document.querySelectorAll('.t-menu-active')
            currenttMenu[0].className = currenttMenu[0].className.replace('t-menu-active', '')
            this.className += ' t-menu-active'
            
        })
    }
    
    tContent.addEventListener('click', (e) =>{
        const id = e.target.id
        //console.log(id + ' esse é o id')
            if (id == '1'){
                console.log('passou o 1')
                tContent.innerHTML = '<div class="tecnology-menu"><div class="t-menu t-menu-active" id="1"><h2>1</h2></div><div class="t-menu " id="2"><h2>2</h2></div><div class="t-menu " id="3"><h2>3</h2></div></div><div class="tec-content-wrap"><div class="tec-txt"><span>the terminology...</span><h2>launch vehicle</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque perspiciatis possimus veniam molestias dolore quas voluptatibus nemo quae. Recusandae sed nihil praesentium repellendus ipsa numquam fuga deleniti perferendis debitis?</p></div><div class="tec-img"><img src="assets/technology/image-launch-vehicle-portrait.jpg" alt=""></div></div>'
                
            }
            if(id == '2'){
                console.log('passou o 2')
                tContent.innerHTML = '<div class="tecnology-menu"><div class="t-menu " id="1"><h2>1</h2></div><div class="t-menu t-menu-active" id="2"><h2>2</h2></div><div class="t-menu " id="3"><h2>3</h2></div></div><div class="tec-content-wrap"><div class="tec-txt"><span>the terminology...</span><h2>spaceport</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque perspiciatis possimus veniam molestias dolore quas voluptatibus nemo quae. Recusandae sed nihil praesentium repellendus ipsa numquam fuga deleniti perferendis debitis?</p></div><div class="tec-img"><img src="assets/technology/image-spaceport-portrait.jpg" alt=""></div></div>'
                
            }
            if(id == '3'){
                console.log('passou o 3')
                tContent.innerHTML = '<div class="tecnology-menu"><div class="t-menu " id="1"><h2>1</h2></div><div class="t-menu " id="2"><h2>2</h2></div><div class="t-menu t-menu-active" id="3"><h2>3</h2></div></div><div class="tec-content-wrap"><div class="tec-txt"><span>the terminology...</span><h2>space capsule</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque perspiciatis possimus veniam molestias dolore quas voluptatibus nemo quae. Recusandae sed nihil praesentium repellendus ipsa numquam fuga deleniti perferendis debitis?</p></div><div class="tec-img"><img src="assets/technology/image-space-capsule-portrait.jpg" alt=""></div></div>'
            }
    })
}
tMenuTrasitions() 
