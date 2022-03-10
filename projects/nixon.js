var sound
const makeRandomElement =()=>{
    let div = document.createElement('div')
    div.innerHTML='Nixon'
    div.style.position='absolute'
    div.style.left=`${Math.floor(Math.random() * 90)}%`
    div.style.top = `${Math.floor(Math.random() * 90)}%`
    return div
}

nixbutton.addEventListener('click',function(){
    
    this.style.border = '5px solid green'

    let elementList = []
    
    for (let i = 0; i < 100; i++) {
        
        let div = makeRandomElement()
        document.body.appendChild(div)
        elementList.push(div)
        
    }
    
    setTimeout(() => {
        this.style.border = '1px solid black'
        alert("Your vote has been casted!")

        for (let elem of elementList) {
            document.body.removeChild(elem)    
        }
        
    }, 1000)
    
})
const moveBtnGov = function() {

    mcgov.style.top = `${Math.floor(Math.random() * -50)}%`
    mcgov.style.left = `${Math.floor(Math.random() * 50) - 25}%`
}

mcgov.addEventListener('mouseover', moveBtnGov)

gov.addEventListener('click', ()=>{
    mcgov.removeEventListener('mouseover', moveBtnGov)
})

mcgov.addEventListener('click', function(){
        alert("Wrong Choice, vote not casted")
})
gov.addEventListener('mouseover', function(){
    this.style.opacity ="0%"
    sound = new Audio('kirby-scream.mp3');
    sound.play();
})
gov.addEventListener('mouseleave', function(){
    this.style.opacity="100%" 
    sound.pause();
})

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("Nothing cheeky please, just vote for Nixon");
      e.preventDefault();
    }, false);
  }


window.addEventListener('load', (event) => {
  alert("You know who to vote for")
});


gooddiv.addEventListener("mousemove", (e) =>{
    console.log("mouse", e.clientX, e.clientY)
    const rect = nixbutton.getBoundingClientRect();
    console.log("nixbutton", rect)

    nixbutton.style.position = 'absolute'
    nixbutton.style.left =`${e.clientX-75}px`
    nixbutton.style.top =`${e.clientY-25}px`
})

gooddiv.addEventListener('mouseleave', function (){
    nixbutton.style.position = 'relative'
    nixbutton.style.left=0
    nixbutton.style.top =0
})