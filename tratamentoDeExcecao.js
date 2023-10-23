const n1 = Number(prompt("Digite o numerador da divisão: "));
const n2 = Number(prompt("Digite o denominador  da divisão: "));
const divisao = n1/n2;

try {
    console.log(`O valor da divisão é: ${divisao}`);
} catch (error) {
    console.error("Ocorreu um erro: ", error.message);
} finally {
    console.error("Espero que tenha aprendido mais sobre divisões!");
}