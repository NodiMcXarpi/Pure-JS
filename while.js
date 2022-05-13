//diferente do loop for, no loop while basta declarar a variavel fora dos pârametros, condicionar o parâmetro e executar a funçao dentro dos {}

var num;
    num = 0;
    while(num < 10){
      document.write(num + '<br>');
      num++;

    } 
   
   //o mesmo poderia ser escrito com o for, porém a colocação de elementos é diferente

    for(num = 0; num<10; num++){
      document.write(num + '<br>')
    }
    
    //em ordem decrescente, existe uma maneira mais simples de se utilizar o while:
    
     var num;
    num = 10;
    while(num--){
      document.write(num + '<br>');


    }
    
    //Tanto no for, quanto no while, podem ser utilizadas strings e até mesmo booleanos, o parâmetro passado para o loop, é apenas para indicar quantas vezes ele será repetido
    
     var num;
    num = 10;
    while(num--){
      document.write('Dollynho da lapa tocando, ta sensacional' + '<br>');
      
        //Não muito utilizado, mas pode ser útil, em números booleanos

    num = true;
    cont = 0;
    while(num){
      document.write('relaxaa na onda da mcanha e vem pucima du pauuuu, beibiiii' + '<br>')
      cont ++;
      if(cont > 2){
        num=false
      }

    }


    }
    document.write('<hr>')
    //o mesmo poderia ser escrito com o for, porém a colocação de elementos é diferente

    for(num = 0; num<10; num++){
      document.write('Tu sentando firme a tropa passa maaal' + '<br>')
    }
   
   //também existe a variação do while, que executa os comendos pelo menos 1 vez, caso a condição imposta não seja aprovada
   
   do{
    document.write('Ta tega no mec')
  }while(num<10);
