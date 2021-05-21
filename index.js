//Deklaracija spremenljivk
const gumbBarva = document.querySelector('.gumbBarva');
const body = document.querySelector('body');
let notranjiOkvirEna = document.querySelector('.ena');
let notranjiOkvirDva = document.querySelector('.dve');
let notranjiOkvirTri = document.querySelector('.tri');
let clicked =true; //Tema je v osnovi svetla
let temaOzadja=window.localStorage.getItem('tema');

if(temaOzadja){
    if(temaOzadja=='temna'){
        temno()

    }

    else{
        svetlo()
    }
}


gumbBarva.addEventListener('click', function (e){
    //Posluša za klik na gumb
    if(!clicked){
        
        svetlo()
    }
    else{
        temno()
    }
    
});


function svetlo(){
    //Svetla tema nadzorne plošče
    body.style.backgroundColor='#add9db'
    clicked= true
    notranjiOkvirEna.style.backgroundColor='white'
    notranjiOkvirDva.style.backgroundColor='white'
    notranjiOkvirTri.style.backgroundColor='white'
    window.localStorage.setItem('tema', 'svetla');
}
function temno(){
    //Temna tema nadzorne plošče
    body.style.backgroundColor='#1521d3'
    clicked=false
    notranjiOkvirEna.style.backgroundColor='darkGrey'
    notranjiOkvirDva.style.backgroundColor='darkGrey'
    notranjiOkvirTri.style.backgroundColor='darkGrey'
    window.localStorage.setItem('tema', 'temna');
}

