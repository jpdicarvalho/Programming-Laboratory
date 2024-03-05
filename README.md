# Laboratório de Programação - Disciplina
---
## Link do site: https://jpdicarvalho.github.io/Programming-Laboratory/
## Author: João Pedro Braga de Carvalho

## Este projeto consiste na criação de um site utilizando React, JavaScript e CSS. O objetivo principal é desenvolver uma timeline que contenha exemplos práticos de cada conteúdo abordado em sala de aula.

## Outrossim, vale ressaltar que os tópicos estão devidamente organizados em suas respectivas avalições propostas.

### A seguir, serão apresentadas as funções em JavaScript implementadas para cada exemplo criado:
---
# >> 1ª Avaliação

/*======== Processamento de String - Paradigma Imperativo ========*/

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
    
/*======== Processamento de String - Paradigma Declarativo ========*/

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

/*======== Processamento Matemático - Paradigma Imperativo===========*/

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

/*======== Processamento Matemático - Paradigma Declarativo ===========*/

    // Função para calcular a raiz quadrada - paradigma declarativo
    function dCalcularRaiz() {
        // Obtém o valor inserido no elemento de entrada HTML com o id 'inputMatDeclarativo'
        let inputMatDeclarativo = document.getElementById('inputMatDeclarativo').value;
    
        // Converte o valor inserido para um número
        let numero = parseFloat(inputMatDeclarativo);
    
        // Verifica se o número é válido e não negativo
        let raizQuadrada = (!isNaN(numero) && numero >= 0) ? Math.sqrt(numero) : 'Entrada inválida. Por favor, digite um número válido e não negativo.';
    
        // Atualiza o conteúdo do elemento HTML com o id 'raizDeclarativo' para exibir o resultado
        document.getElementById('raizDeclarativo').textContent = 'Raiz quadrada: ' + raizQuadrada;
}

/*======== Problemas em Paradigmas Imperativos: Geometria Computacional ===========*/

    // Função chamada quando o usuário pressiona o botão do mouse
        const startDrawing = (event) => {
            setIsDrawing(true); // Define que o usuário está desenhando
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            // Calcula as coordenadas iniciais do desenho em relação ao canvas
            startX = event.clientX - rect.left;
            startY = event.clientY - rect.top;
        }

    // Função chamada quando o usuário solta o botão do mouse
    const stopDrawing = () => {
        setIsDrawing(false); // Define que o usuário parou de desenhar
    }

    // Função chamada quando o usuário move o mouse sobre o canvas
    const draw = (event) => {
        // Verifica se o usuário está desenhando
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        // Obtém as coordenadas atuais do mouse em relação ao canvas
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Inicia um novo caminho de desenho
        context.beginPath();
        // Move o ponto de início do desenho para as coordenadas iniciais
        context.moveTo(startX, startY);
        // Desenha uma linha até as coordenadas atuais do mouse
        context.lineTo(x, y);
        // Aplica o traçado
        context.stroke();

        // Atualiza as coordenadas iniciais para as atuais
        startX = x;
        startY = y;
    }
---
# >> 2ª Avaliação

/*======== Problemas em Paradigmas Imperativos: Estruturas de Dados. ===========*/
//Lista Duplamente Encadeada com operações de inserção e deleção de elementos.

    //Classe de criação do nó
    class Node {
        constructor(data) {
            this.data = data;
            this.prev = null;
            this.next = null;
        }
    }
    const [head, setHead] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [listValues, setListValues] = useState([]);

    // Função para inserir um nó no final da lista duplamente encadeada
    const insertAtEnd = (data) => {
        const newNode = new Node(data);

        if (!head) {
            setHead(newNode);
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }

        setListValues([...listValues, data]);
        setInputValue('');
    };

    // Função para deletar um nó vom valor específico da lista duplamente encadeada
    const deleteNode = (data) => {
        if (!head) {
            return;
        }

        let current = head;
        while (current) {
            if (current.data === data) {
                if (current === head) {
                    setHead(current.next);
                    if (current.next) {
                        current.next.prev = null;
                    }
                } else {
                    if (current.prev) {
                        current.prev.next = current.next;
                    }
                    if (current.next) {
                        current.next.prev = current.prev;
                    }
                }
                setListValues(listValues.filter(item => item !== data));
                break;
            }
            current = current.next;
        }
    };

    // Função para lidar com mudanças no input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
