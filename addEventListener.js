<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./stylesheet.css" type="text/css" />
   <style>
     #dv1{
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    background-color: #f00;
    position:absolute;
    left: 0px;
    top: 0px;}
    </style>
  </head>
  <script>
    function msg(){
     alert('hello, my darling, you need to find a job');
    }
     //inicialização de eventos, pois o a dv1 ainda n foi renderizada
     function addEventos(){
     document.getElementById('dv1').addEventListener('click', msg);
     }
     window.addEventListener('load', addEventos) //finalizando a inicialização de eventos
  </script>
  <body>
    <div id="dv1">

    </div>

  </body>
</html>
