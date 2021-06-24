function somarMedia() {
  var nome;
  var nota1;
  var nota2;
  var resultadoMedia;
  nome = window.prompt('Digite o nome do aluno')
  nota1 = window.prompt('Digite um valor: ');
  nota2 = window.prompt('Digite outro valor: ');
  resultadoMedia = (parseInt(nota1) + parseInt(nota2)) / 2;
  alert('Nome do(a) aluno(a): ' +nome+ '\n  Nota 1: ' +nota1+ '\n Nota 2: ' +nota2+ '\n Média do aluno: ' +resultadoMedia);
}

function adicao() {
  var valor1;
  var valor2;
  var resultadoSoma;
  valor1 = window.prompt('Digite um valor: ');
  valor2 = window.prompt('Digite outro valor: ');
  resultadoSoma = parseInt(valor1) + parseInt(valor2);
  alert('A soma é: '+resultadoSoma);
}

function subtracao() {
  var valor1;
  var valor2;
  var resultadoSubtracao;
  valor1 = window.prompt('Digite um valor: ');
  valor2 = window.prompt('Digite outro valor: ');
  resultadoSubtracao = parseInt(valor1) - parseInt(valor2);
  alert('A soma é: '+resultadoSubtracao);
}


function divisao() {
  var valor1;
  var valor2;
  var resultadoDivisao;
  valor1 = window.prompt('Digite um valor: ');
  valor2 = window.prompt('Digite outro valor: ');
  resultadoDivisao = parseInt(valor1) / parseInt(valor2);
  alert('A soma é: '+resultadoDivisao);
}


function multiplicacao() {
  var valor1;
  var valor2;
  var resultadoMultiplicacao;
  valor1 = window.prompt('Digite um valor: ');
  valor2 = window.prompt('Digite outro valor: ');
  resultadoMultiplicacao = parseInt(valor1) * parseInt(valor2);
  alert('A soma é: '+resultadoMultiplicacao);
}


function parOuImpar() {
  var valor;
  valor = window.prompt('Digite um valor e direi se é Impar ou Par: ');
  var resto = valor % 2;
  if(resto == 0){
      alert("O número " +valor+ " é par");
  }else{
     alert("O número " +valor+ " é impar");
  }
}
