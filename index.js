const gumbBarva = document.querySelector('.gumbBarva');
const body = document.querySelector('body');
let notranjiOkvirEna = document.querySelector('.ena');
let notranjiOkvirDva = document.querySelector('.dve');
let notranjiOkvirTri = document.querySelector('.tri');

let tema = "svetla"
let clicked =true;
gumbBarva.addEventListener('click', function (e){
    if(!clicked){
        
        svetlo()
    }
    else{
        temno()
    }
    
});

function svetlo(){
    body.style.backgroundColor='#add9db'
    clicked= true
    notranjiOkvirEna.style.backgroundColor='white'
    notranjiOkvirDva.style.backgroundColor='white'
    notranjiOkvirTri.style.backgroundColor='white'
}
function temno(){
    body.style.backgroundColor='#1521d3'
    clicked=false
    notranjiOkvirEna.style.backgroundColor='darkGrey'
    notranjiOkvirDva.style.backgroundColor='darkGrey'
    notranjiOkvirTri.style.backgroundColor='darkGrey'
}