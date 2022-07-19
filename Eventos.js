<!DOCTYPE html>
<html>
  <meta charset="utf-8"/>
  <head>
    <style>
    #dv1{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
   }
  </style>
   <script>

    
    
  </script>
    
  
   
  </head>
  <body>
    <div id="dv1"></div>
    <hr/>
    <button onclick="alert('meu p1ru ta vindo aí, vuke vukeeke')">Click on me, motherfucker</button> //comandos simples, como um alert por exemplo, podem ser chamados no próprio html
    
      
    
 
  

 
  </body>

</html>


 </style>
   <script>
    function changeColor(obj, color){
      obj.style.backgroundColor=color;
    }

    
    
  </script>
    
  
   
  </head>
  <body>
    <div id="dv1" onmouseover="changeColor(this, '#f00')"></div>  //o padrão para chamar uma funçao num evento é o mesmo
    <hr/>
    <button onclick="alert('meu p1ru ta vindo aí, vuke vukeeke')">Click on me, motherfucker</button>
    
      
    
 
  

 
  </body>

</html>

 <script>
    function changeColor(obj, color){
      obj.style.backgroundColor=color;
    }

    
    
  </script>
    
  
   
  </head>
  <body>
    <div id="dv1" onmouseover="changeColor(this, '#f00')" onmouseout="changeColor(this, '#fff')"></div> //é possível adcinar mais de uma função ao mesmo evento
    <hr/>
    <button onclick="alert('meu p1ru ta vindo aí, vuke vukeeke')">Click on me, motherfucker</button>


//e também é possível adcionar outro evento ao mesmo elemento, da maneira abaixo, code final:

<!DOCTYPE html>
<html>
  <meta charset="utf-8"/>
  <head>
    <style>
    #dv1{
    width: 200px;
    height: 200px;
    border: 1px solid #000;
   }
  </style>
   <script>
    function changeColor(obj, color){
      obj.style.backgroundColor=color;
    }

    
    
  </script>
    
  
   
  </head>
  <body>
    <div id="dv1" onmouseover="changeColor(this, '#f00')" onmouseout="changeColor(this, '#fff')"></div> 
    <hr/>
    <button onclick="changeColor(dv1, '#000')">Click on me, motherfucker</button>
    
      
    
 
  

 
  </body>

</html>
    
      
    
 
  

 
