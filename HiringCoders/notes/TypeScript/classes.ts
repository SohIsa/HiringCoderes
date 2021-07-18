// class Data {        //propriedades publicas mas é possivel definir modificadores de acesso
//     public dia: number;
//     mes: number;            //por default ela é pública
//     ano: number;            //private

//     constructor(dia: number, mes: number, ano: number = 1970) {         //1970 será um ano default p quando n for especificado
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
// }

// const data = new Data (1,1,2121);
// console.log(data.dia);
//console.log(data.ano);      (ANO - n é possível)


// da pra definir modificadores de acesso direto no construtor

class Data {        
    constructor(public dia: number, public mes: number, public ano: number = 1970) {         
    }
}