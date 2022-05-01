<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <link rel="stylesheet" href="./fak.css">
    <title>Page Title</title>
    

    
</head>
<body>
   <script>
     //Basta apenas criar uma variavel e declarar seus parâmetros, feito isso basta chamanr o loop for
   var cont
   for(cont = 0; cont < 10; cont++){
     document.write('Hello, my friend.<br>')

   }   
   
   //A lógica acima aplicada basicamente é, cont = 0, (for) enquanto cont estiver menor que 10, adcione mais 1
   </script>
  
   
</body>

</html>

//same way as

var cont
   for(cont = 10; cont > 0 ; cont--){
     document.write('Hello, my friend.<br>')

   } 
   
    var phrases = [];
   phrases.push(0)
   phrases.push(1)
   phrases.push(2)
   phrases.push(3)

   for(cont =0; cont < 3; cont++){
     document.write(phrases[cont] + '<br>')
   }

   //number 3 wont appear cuz we are counting the array position/
   
   
   //o mesmo método pode ser usado também com strings e usando o elemento prompt()
   
      var phrases = [];

   for(cont =0; cont < 2; cont ++){
     phrases.push(prompt('Digite algo, meu nobre', ''));
   }
   

   for(cont =0; cont < 2; cont++){
     document.write(phrases[cont] + '<br>')
   }

