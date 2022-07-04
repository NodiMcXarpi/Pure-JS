//Já no getElementsByTagName, o innerHTML é muito mais útil, pois sem ele é impossível ter acesso a quase todo texto presente na tela e ele também
//age em conjunto com o apontador por vetores, que indicam à partir da posição 0, por exemplo:
<body>
 
  
 <p>Se, teu amor fosse maior</p>
 <p>Maior seria o teu viver</p>
 <p>Em esquecer o amor menor</p>
 <p>Seria fácil pra você</p>
 <p>E aquela dor, que hoje ainda te alucina</p>
 <p>Lhe faz perder a vida</p>
 <p>Se alguém viesse perguntar</p>
 <p>Você iria responder</p>
 <p>Que ela já foi esquecida</p> 
 <hr/>
 
 <script>
   
   let tagsP = document.getElementsByTagName('p');

   document.write(tagsP[0].innerHTML) //vetor 0

 </script> 
   
</body>







//que também pode ser escrito da seguinte maneira:

<body>
 
  
 <p>Se, teu amor fosse maior</p>
 <p>Maior seria o teu viver</p>
 <p>Em esquecer o amor menor</p>
 <p>Seria fácil pra você</p>
 <p>E aquela dor, que hoje ainda te alucina</p>
 <p>Lhe faz perder a vida</p>
 <p>Se alguém viesse perguntar</p>
 <p>Você iria responder</p>
 <p>Que ela já foi esquecida</p> 
 <hr/>
 
 <script>
   
   let tagsP = document.getElementsByTagName('p')[1] // vetor 1 selecionado

  document.write(tagsP.innerHTML)  
  
    
  </script> 
   
 <script>
   //após criada a variável, é possível selecionar o vetor e alterar o que for desejado no mesmo, da seguinte maneira:
   
   let tagsP = document.getElementsByTagName('p')

  tagsP[0].style.fontSize='50px'
  
    
  </script> 

 //que seria o mesmo que escrever: 

  document.getElementsByTagName('p')[0].style.fontSize='50px'

   //se a variável nao tivesse sido criada(uma variável sempre é um ótimo atalho)

 //e para selecionar todos que tiverem a tag selecionada, basta utilizar o metodo FOR com o índice(i):

  let tagsP = document.getElementsByTagName('p')

  for (let i=0;i<tagsP.length;i++){
    tagsP[i].style.color='#f00';
  }

    
 
