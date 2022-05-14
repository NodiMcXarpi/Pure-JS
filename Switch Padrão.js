  let num = 10;
 
   var pos, msg
   pos = 4
 switch(pos){
     case 1:
         msg='Primeiro lugar, medalha de ouro'
    break

    case 2:
        msg= 'Second place, silver for you bro'

        break
    
    case 3:
        msg= 'Bronzódia, meu cria'    

        break

        default:
            msg = 'Nem atingiu o pódio, bro'


 }

 document.write(msg)
 
 
 //onde também pode ser adcionada uma simples regra de switch com if/else if
 
 var pos, msg, points

   points = 70

   if (points >= 100)
   {pos = 1}
   else if(points <= 90 && points>=80){
       pos = 2
   }else if(points >= 70){
       pos = 3
   }else{
       pos = 0
   }
 switch(pos){
     case 1:
         msg='Primeiro lugar, medalha de ouro'
    break

    case 2:
        msg= 'Second place, silver for you bro'

        break
    
    case 3:
        msg= 'Bronzódia, meu cria'    

        break

        default:
            msg = 'Nem atingiu o pódio, bro'


 }

 document.write(msg)
