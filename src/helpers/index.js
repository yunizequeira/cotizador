export function ObtenerDiferenciaYear(year) {
    return new Date().getFullYear()- year
}

export function CalcularMarca (marca){
    let incremento

    switch (marca) {
        case "1":
            incremento= 1.30
            break;
        case "2":
            incremento= 1.15
            break;
        case "3":
            incremento= 1.05
            break;
        default:
            break;
    }
    return incremento;
}

export function CalcularPlan(plan){
    return (plan==="1") ? 1.20 : 1.5
}

export function formatearDinero (dinero){
    return dinero.toLocaleString('en-US',{
        style:"currency",
        currency:"USD"
    });
}