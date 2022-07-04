<body>
 
  <p id="heya">Yo man, what's up?</p>
  <div id="box">oxenti</div> 
  
 
 
 <script>
    document.getElementById('heya').style.color='#f00'
    document.getElementById('box').style.color='blue'
  </script> 

//também é possível criar uma variável e atribuir tudo que for necessário na mesma

 var heya = document.getElementById('heya') //it's the same as the first call, but you don't have to write everytime you want to change it, u can just call the variable
    heya.style.fontSize='50px' //também é possível usar os dois modos ao mesmo tempo, porém criando uma variável o code fica mais limpo e organizado.

ex 2:
<body>
 
  
  <p id="texto">CFB CURSOS</p>
 <input type="text" id="cxtexto" value="melo comédia waterless">
 
 
 <script>
   //é possível resumir o document.getelementbyid em uma váriavel, e ter acesso a elementos do mesmo apontando os mesmos, por ex

   var cxt = document.getElementById('cxtexto').value
   alert(cxt)
  
    
  </script> 
   <body>
 
  
  <p id="texto">CFB CURSOS</p>
 <input type="text" id="cxtexto" value="melo comédia waterless">
  
  
  
   <script>
   //e também é possível modificar o valor da tag com o innerhtml, basta atribuir o valor desejado
   var cxt = document.getElementById('texto').innerHTML = 'mello cocudo waterless'
   alert(cxt)
  
  
    
  </script> 
 
  //tags q utilizam value, nao usam innerhtml:
 
 <script>
   
   var cxt = document.getElementById('texto').innerHTML
   alert(cxt)
  
// É importante lembrar que elementos que utilizam value, não funcionam com innerHTML
  
    
  </script> 
   
</body>
