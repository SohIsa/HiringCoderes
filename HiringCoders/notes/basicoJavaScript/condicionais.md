var num = 1;
num = 2;
if (num === 1) {
    console.log("é igual")
}
else if (num === 2) {
    console.log("é igual a 2")
}
else {
    console.log("igual a 5")
}

mes = "janeiro"

switch (mes) {
    case "fevereiro":
        console.log("mês 2");
        break;
    case "março":
        console.log("mês 3");
        break;
    case "janeiro":
        console.log("Mês 1");
        break;
    default:
        console.log("nunhum dos casos atendido"); // > quando o default é utilizado.
}