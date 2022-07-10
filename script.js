//Calcular valor total para recebimento: salário e vendas. 
//Declarar duas variáveis, parâmetros salário fixo e vendas
//Comissão de 3% para vendas em até R$ 1200.
//Comissão de 5% para vendas acima de R$ 1200.
//Declarar codincional.

function calculateSalary(salarioFixo, vendas){
    let comissao = 0;
    let salarioTotal = 0;

    while(vendas <= 1200){
        comissao = vendas * (0.03);
    }
    if(vendas > 1200){
        comissao = vendas * (0.05);
    }
    salarioTotal = salarioFixo + comissao;

    return salarioTotal;
}
//(calculateSalary(2000,2500))
//console.log(calculateSalary(2000,2500))




//Calcular quantidade de notas de cada cédula do saque.
//Declarar função com os parâmetros de saque, salário fixo e vendas.
//Declarar array das notas para saque.
//Ex. de output: Foram sacadas 3 notas de R$ 10,00. Valor do saque foi R$ 30,00 e o novo saldo é 5 000,00.

function cashMachine(valorSaque, salarioFixo, vendas){

    let saque = valorSaque;
    
    let cedulasDisponiveis = [200, 100, 50, 20, 10, 5, 2];

    let saldoRestante = calculateSalary(salarioFixo, vendas) - valorSaque;


    if(valorSaque > calculateSalary(salarioFixo, vendas)){
        return `Valor insuficiente para saque.`
    }
    
    cedulasDisponiveis.forEach(elemento => {
        let qtdNotas = parseInt(valorSaque/elemento);

        if(qtdNotas > 0){
            console.log(`Foram sacadas ${qtdNotas} notas de R$ ${elemento},00.`)
        }
        saque = saque % elemento;

    })
    console.log(`Portanto, o valor do saque foi ${saque} e o novo saldo é ${saldoRestante}`)


}
cashMachine(4500, 15000, 6785)
//console.log(cashMachine(4500, 15000, 6785))




//Criar função que receba 3 parâmetros: estoques atual, máximo e mínimo.
//Calcular a media de produtos.
//Condicinal para comprar mais produtos ou não.

function calculateStock(estoqueAtual, estoqueMax, estoqueMin){

    let mediaProdutos = (estoqueMax + estoqueMin)/2;

    if(estoqueAtual >= mediaProdutos){
        return "Não efetuar compra.";
    }
    else{
        return "Efetuar compra."
    }
}
calculateStock(500,800,250)




//Criar função que receba os parâmetros ano de nascimento de uma pessoa e o ano atual
//Retorne idade da pessoa em ANOS, em MESES, em DIAS e em SEMANAS.

function calculateAge(anoNascimento, anoAtual){

    let idade = anoAtual - anoNascimento;
    //console.log("Sua idade em anos é: " + idadeAno);
    
    let idadeMeses = idade * 12;
    //console.log("Sua idade em meses é: " + idadeMes);
    
    let idadeDias = idade * 365;
    //console.log("Sua idade em dias são: " + idadeDia);

    let idadeSemanas = Math.round(idadeDias/7);
    //console.log("Sua idade em semanas são: " + idadeSem); 
   

    return (`A idade é ${idade} anos, ${idadeMeses} meses, ${idadeSemanas} semanas e ${idadeDias} dias.`)
}
calculateAge(1992,2022)
//console.log(calculateAge(1992,2022))




//Função recebe uma matriz nxn
//Retorna diagonal PRINCIPAL -> Coleção das entradas A_{{i,j}}, onde i = j.

function getDiagonal(matriz){
    
    let diagonal = [];

    for(let i = 0; i < matriz.length; i++){
        
        //console.log(i);
        
        for (let j = 0; j < matriz[i].length; j++){
            
            //console.log(j);
            
            if((i) == (j)){
                diagonal.push(matriz[i][j]);
            }
        }
    }
    return diagonal;
}
getDiagonal([
    [8, 9, 0],
    [0, 1, 5],
    [27, 56, 1]
])
//console.log(getDiagonal([ [8, 9, 0], [0, 1, 5], [27, 56, 1]]))