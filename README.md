# Laboratório de Programação - Disciplina
---
## Link do site: https://jpdicarvalho.github.io/Programming-Laboratory/
## Author: João Pedro Braga de Carvalho

## Este projeto consiste na criação de um site utilizando React, JavaScript e CSS. O objetivo principal é desenvolver uma timeline que contenha exemplos práticos de cada conteúdo abordado em sala de aula.
### A seguir, serão apresentadas as funções em JavaScript implementadas para cada exemplo criado:
/*======== Processamento de String ========*/

    //Função para processar string - paradigma imperativo
    
    function contarVogaisImperativo() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputImperativo'
        let inputImperativo = document.getElementById('inputImperativo').value;
    
        // Inicializa a variável de contagem de vogais
        let count = 0;
    
        // Define um array contendo as vogais
        const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
        // Itera sobre cada caractere da string inserida
        for (let i = 0; i < inputImperativo.length; i++) {
            let char = inputImperativo[i];
            
            // Verifica se o caractere atual é uma vogal
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
                char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
                // Se for uma vogal, incrementa o contador de vogais
                count++;
            }
        }
    
        // Atualiza o conteúdo do elemento HTML com o id 'vogaisCount' para exibir o número de vogais encontrado
        document.getElementById('vogaisCount').textContent = 'Número de vogais: ' + count;
    }

    //Função para processar string - paradigma declarativo
    function contarVogaisDeclarativo() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputImperativo'
        let inputImperativo = document.getElementById('inputDeclarativo').value;
    
        // Define um array contendo as vogais
        const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
        // Usa o método reduce para contar as vogais na string
        let count = inputImperativo.split('').reduce((acc, char) => {
            if (vogais.includes(char)) {
                return acc + 1;
            } else {
                return acc;
            }
        }, 0);
    
        // Atualiza o conteúdo do elemento HTML com o id 'vogaisCountDeclarativo' para exibir o número de vogais encontradas
        document.getElementById('vogaisCountDeclarativo').textContent = 'Número de vogais Declarativo: ' + count;
    } 

/*======== Processamento Matemático ===========*/

    // Função para calcular a raiz quadrada
    function calcularRaiz() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputMatImperativo'
        let inputMatImperativo = document.getElementById('inputMatImperativo').value;

        // Converte o valor inserido para um número
        let numero = parseFloat(inputMatImperativo);

        // Verifica se o número é válido
        if (!isNaN(numero)) {
            // Calcula a raiz quadrada usando o método de bisseção
            let raiz = calcularRaizManual(numero);

            // Atualiza o conteúdo do elemento HTML com o id 'raizImperativo' para exibir o resultado
            document.getElementById('raizImperativo').textContent = 'Raiz quadrada: ' + raiz;
        } else {
            // Se o valor inserido não for um número válido, exibe uma mensagem de erro
            document.getElementById('raizImperativo').textContent = 'Entrada inválida. Por favor, digite um número válido.';
        }
    }

    // Função para calcular a raiz quadrada usando o método de bisseção
    function calcularRaizManual(numero) {
        // Define um intervalo próximo ao valor real da raiz quadrada
        let min = 0;
        let max = numero;
        let precisao = 0.0001; // Precisão desejada

        // Aplica o método da bisseção para encontrar a raiz quadrada
        while (max - min > precisao) {
            let meio = (min + max) / 2;
            if (meio * meio > numero) {
                max = meio;
            } else {
                min = meio;
            }
        }

        // Retorna a média entre os valores mínimo e máximo como a raiz quadrada
        return (min + max) / 2;
}
