function geraE()
{
 let idade, sexo, NaoDefinido=0, total=0, homen=0, mulher=0, pessoas=0;

 while(pessoas<10)
 {
    idade=(window.prompt("Digite sua idade"));
    idade=parseInt(idade);
    
    sexo=(window.prompt("Digite seu sexo (F)eminino ou (M)asculino"));
    sexo=sexo.toUpperCase();

    if(sexo='F'){
        mulher++;
    }
    else if (sexo='M'){
        homen++;
    }
    else{
        NaoDefinido++;
    }

    total= total + idade;

    pessoas++;

}
    alert("Total de Mulheres: "+mulher+
    "\nTotal de homens: "+homen+
    "\nSexo não definido: "+NaoDefinido+
    "\nMédia idade: "+total/10)

}

