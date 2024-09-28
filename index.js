let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

function isFibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}

let numero = 21; 
if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

let faturamentoDiario = [
    { "dia": 1, "valor": 1000 },
    { "dia": 2, "valor": 5000 },
    { "dia": 3, "valor": 0 }, // Fim de semana sem faturamento
    { "dia": 4, "valor": 800 },
    { "dia": 5, "valor": 3000 },
    // Mais dias podem ser adicionados aqui
];

let menor = Number.MAX_VALUE;
let maior = 0;
let soma = 0;
let diasComFaturamento = 0;

// Calcular menor, maior e soma
for (let i = 0; i < faturamentoDiario.length; i++) {
    let valor = faturamentoDiario[i].valor;
    if (valor > 0) { // Ignorar dias sem faturamento
        if (valor < menor) menor = valor;
        if (valor > maior) maior = valor;
        soma += valor;
        diasComFaturamento++;
    }
}

// Calcular média mensal
let media = soma / diasComFaturamento;

// Calcular número de dias com faturamento superior à média
let diasAcimaDaMedia = faturamentoDiario.filter(dia => dia.valor > media).length;

console.log(`Menor faturamento: R$ ${menor}`);
console.log(`Maior faturamento: R$ ${maior}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);

let faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let total = 0;
for (let estado in faturamento) {
    total += faturamento[estado];
}

for (let estado in faturamento) {
    let percentual = (faturamento[estado] / total) * 100;
    console.log(`Estado: ${estado} - Percentual: ${percentual.toFixed(2)}%`);
}

function inverterString(str) {
    let resultado = "";
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

let palavra = "Exemplo";
let invertida = inverterString(palavra);
console.log(`String invertida: ${invertida}`);
