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
