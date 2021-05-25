//Deklaracija spremenljivk
const gumbBarva = document.querySelector('.gumbBarva');
const body = document.querySelector('body');
let notranjiOkvirEna = document.querySelector('.ena');
let notranjiOkvirDva = document.querySelector('.dve');
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
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    else{
        temno()
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
        
    }
    
});


function svetlo(){
    //Svetla tema nadzorne plošče
    body.style.backgroundColor='#add9db'
    clicked= true
    notranjiOkvirEna.style.backgroundColor='white'
    notranjiOkvirDva.style.backgroundColor='white'
    //Shrani izbiro uporabnika v localstorage
    window.localStorage.setItem('tema', 'svetla');
}
function temno(){
    //Temna tema nadzorne plošče
    body.style.backgroundColor='#1521d3'
    clicked=false
    notranjiOkvirEna.style.backgroundColor='darkGrey'
    notranjiOkvirDva.style.backgroundColor='darkGrey'
    //Shrani izbiro uporabnika v localstorage
    window.localStorage.setItem('tema', 'temna');
}

//Graf
google.load('visualization', '1', {
    packages: ['corechart', 'line']
  });
  google.setOnLoadCallback(drawBackgroundColor);
  
  function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Temperatura');
    data.addColumn('number', 'Vlaga');
    console.log("--");
    data.addRows([
      [0, 0, 0],
      [10, 10, 15],
      [20, 20, 65]
    ]);
    console.log(data);
     var options = {
      height: 350,
      legend: {
        position: 'bottom'
      },
      hAxis: {
        title: 'Dan'
      },
      vAxis: {
        title: 'Temperatura [°C]'
      },
      backgroundColor: ''
    };
  
    function resize() {
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    window.onload = resize();
    window.onresize = resize;
  
  }
