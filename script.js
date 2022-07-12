//Calcular valor total para recebimento: salário e vendas. 
//Declarar duas variáveis, parâmetros salário fixo e vendas
//Comissão de 3% para vendas em até R$ 1200.
//Comissão de 5% para vendas acima de R$ 1200.
//Declarar codincional.

function calculateSalary(salarioFixo, vendas){
    let comissao = 0;
    let salarioTotal = 0;

    if(vendas <= 1200){
        comissao = vendas * (0.03);
    }
    else if(vendas > 1200){  
        let calculoDos3Porcento = 3/100 * 1200;
        comissao = ((vendas - 1200) * 0.05) + calculoDos3Porcento;
    }
    salarioTotal = salarioFixo + comissao;

    return salarioTotal;
}
calculateSalary(2000,2500)
//console.log(calculateSalary(2000,2500))




//Calcular quantidade de notas de cada cédula do saque.
//Declarar função com os parâmetros de saque, salário fixo e vendas.wq
//Declarar array das notas para saque.
//Ex. de output: Foram sacadas 3 notas de R$ 10,00. Valor do saque foi R$ 30,00 e o novo saldo é 5 000,00.

function cashMachine(valorSaque, salarioFixo, vendas){

    let saque = valorSaque;
        
    let saldoRestante = calculateSalary(salarioFixo, vendas) - valorSaque;

    //let cedulasDisponiveis = [200, 100, 50, 20, 10, 5, 2];
    let cedulasDisponiveis = [0, 0 , 0, 0, 0, 0, 0]

    if(valorSaque > calculateSalary(salarioFixo, vendas)){
        return `Valor insuficiente para saque.`
    }

    while(saque > 0){
        if(saque >= 200){
            cedulasDisponiveis[0]++;
            saque -= 200;
        }
        else if(saque >= 100){
            cedulasDisponiveis[1]++;
            saque -= 100;
        }
        else if(saque >= 50){
            cedulasDisponiveis[2]++;
            saque -= 50;
        }
        else if(saque >= 20){
            cedulasDisponiveis[3]++;
            saque -= 20;
        }
        else if(saque >= 10){
            cedulasDisponiveis[4]++;
            saque -= 10;
        }
        else if(saque >= 5){
            cedulasDisponiveis[5]++;
            saque -= 5;
        }
        else if(saque >= 2){
            cedulasDisponiveis[6]++;
            saque -= 2;
        }

    }

    return `Foram sacadas ${cedulasDisponiveis[0]} notas de R$ 200, ${cedulasDisponiveis[1]} notas de R$ 100, ${cedulasDisponiveis[2]} notas de R$ 50, ${cedulasDisponiveis[3]} notas de R$ 20, ${cedulasDisponiveis[4]} notas de R$ 10, ${cedulasDisponiveis[5]} notas de R$ 5 e ${cedulasDisponiveis[6]} notas de R$ 2. Saldo restante é ${saldoRestante}`

}
console.log(cashMachine(2500, 15000, 6785))
    

/*

    OUTRA MANEIRA DE FAZER:

    let nota200 = 0;
    let nota100 = 0;
    let nota50 = 0;
    let nota20 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota2= 0;

    if(valorSaque > calculateSalary(salarioFixo, vendas)){
        return `Valor insuficiente para saque.`
    }

    while(saque > 0){
        if(saque >= 200){
            nota200++;
            saque -= 200;
            //console.log(saque, nota200)
        }
        else if(saque >= 100){
            nota100++;
            saque -= 100;
        }
        else if(saque >= 50){
            nota50++;
            saque -= 50;
        }
        else if(saque >= 20){
            nota20++;
            saque -= 20;
        }
        else if(saque >= 10){
            nota10++;
            saque -= 10;
        }
        else if(saque >= 5){
            nota5++;
            saque -= 5;
        }
        else if(saque >= 2){
            nota2++;
            saque -= 2;
        }

    }

    return `Foram sacadas ${nota200} notas de R$ 200, ${nota100} notas de R$ 100, ${nota50} notas de R$ 50, ${nota20} notas de R$ 20, ${nota10} notas de R$ 10, ${nota5} notas de R$ 5 e ${nota2} notas de R$ 2. Saldo restante é ${saldoRestante}`

}
console.log(cashMachine(2500, 15000, 6785))

*/




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