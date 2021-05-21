//Deklaracija spremenljivk
const gumbBarva = document.querySelector('.gumbBarva');
const body = document.querySelector('body');
let notranjiOkvirEna = document.querySelector('.ena');
let notranjiOkvirDva = document.querySelector('.dve');
let notranjiOkvirTri = document.querySelector('.tri');
let clicked =true; //Tema je v osnovi svetla
//temaOzadja dobi vrednost shranjeno iz prejšnjega obiska strani
let temaOzadja=window.localStorage.getItem('tema');

//Preveri če tema ozadja obstaja
if(temaOzadja){
    //Če tema ozadja obstaja in je ta temna vklopi temen način
    if(temaOzadja=='temna'){
        temno()

    }
    //Drugače vklopi svetel način
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
    //Shrani izbiro uporabnika v localstorage
    window.localStorage.setItem('tema', 'svetla');
}
function temno(){
    //Temna tema nadzorne plošče
    body.style.backgroundColor='#1521d3'
    clicked=false
    notranjiOkvirEna.style.backgroundColor='darkGrey'
    notranjiOkvirDva.style.backgroundColor='darkGrey'
    notranjiOkvirTri.style.backgroundColor='darkGrey'
    //Shrani izbiro uporabnika v localstorage
    window.localStorage.setItem('tema', 'temna');
}

