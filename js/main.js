



/*function soma(n1, n2){
    return n1 + n2;    // função  de soma
}
alert(soma(5, 10));*/

var validar = 0
function validaidade(idade){
   // var validar; se eu não declaro esse "var" dentro da function a function usa  a "var" global 
   //se eu declaro essa "var" dentro da function a function usa a "var" local ou seja  a "var" mostra 
   //o valor declarardo da "var" fora da function 
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar
}

var idade = prompt("qual é a sua idade?");
validaidade(idade)
console.log(validar);



/*var d = new Date();
alert(d);   //para mostrar a data cpmpleta
alert(d.getMonth() + 1);//para mostrar somente o mês*sempre usar + 1 pois os meses contam a partir do 0
alert(d.getMinutes()); //mostra somente minutos
alert(d.getDay());mostra somente o dia 
*/


/*var count;  // estrutura de repetição com "for"
for(count=0; count <= 5; count++){
    alert(count);
};
*/


/*var count = 0;  //estrutura de repetição
while (count<=5){
    console.log(count);
    alert(count);
    count++
}
*/


/*var idade = prompt("qual é a sua idade?"); //o prompt coleta os dados digitados e armazena na variavel
if (idade >= 18){
    alert("maior de idade");
}else{
        alert("menor de idade");
    }
*/


/*var frutas =[{nome:"amora", cor:"roxa"}, {nome:"kiwi", cor:"verde"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*var fruta ={nome:"amora", cor:"roxa"}  
console.log(fruta.nome);
alert(fruta.cor);
*/

/*var lista = ["jaca", "goiaba","melão"];
lista.push("banana"); adiciona um item a sua lista 
lista.pop();  retira o ultimo item da lista
*/


//console.log(lista);//exibe a lista inteira
//console.log(lista.toString());  trasforma  a variavel em uma string
//console.log(lista.join(" / "));transforma em string tbm  oporém vc pode escolher como vai separar 
//console.log(lista.length);  mostra o tamanho da lista 
//console.log(lista.reverse());  reverte a ordem da lista
//console.log(lista[1]);  exibe o 2ºitem p os item começam a contar a partid do "0"


/*var nome= "Wellington Oliveira";//strings sempre entre aspás 2
var idade = 34   numeros  fora das aspas
var idade2 = 10
var frase = "japao é o melhor time do mundo";
//alert( nome  +  "tem"  +  idade  +  "anos");
//alert (idade + idade2);   se forem 2 numeros soma as variaveis se uam das variaveis for string concatena
console.log(nome);     console.log mostra na pagina de inpeção  na aba console oq é executado
console.log(idade * idade2);   pode-se fazer calculos usando as variaveis de numeros
//console.log(frase);
//console.log(frase.toUpperCase());   coloca  tudo em letra maiúscula
console.log(frase.toLowerCase());   coloca  tudo em letra minúscula
//console.log(frase.replace("japao", "brasil"));  para trocar alguma palavra dentro da variavel
alert(frase.replace("japao", "brasil"));   mesma função mais no alerta da página*/