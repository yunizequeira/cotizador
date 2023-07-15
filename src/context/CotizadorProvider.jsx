import {createContext,useState} from 'react';
import { ObtenerDiferenciaYear,CalcularMarca,CalcularPlan,formatearDinero } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({children})=>{
// State
const [datos,SetDatos]=useState({
    marca:'',
    year:'',
    plan:''
})
 const [error,setError] = useState("")

 const [resultado,setResultado] = useState()

const HandleChangeDatos = (e)=>{
    SetDatos({
        ...datos,
        [e.target.name]: e.target.value 
    })
 
}

const CotizarSeguro =()=>{
    // base
    let resultado =2000

    // Obtener diferencia
    const diferencia = ObtenerDiferenciaYear(datos.year)
   

    // hay que restar el 3% por cada year
    resultado -= ((diferencia * 3)* resultado) / 100
   
    //Americano 15%
    // Europeo 30%
    // Asiatico 5%  
    resultado *= CalcularMarca(datos.marca)
    

    // basico 20%
    // completo 50%
    resultado *=CalcularPlan(datos.plan)
    resultado = formatearDinero(resultado)
    setResultado({datos,resultado})
}

    return(
        <CotizadorContext.Provider
        value={{
            HandleChangeDatos,
            datos,
            setError,
            error,
            CotizarSeguro,
            resultado
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {CotizadorProvider};
export default CotizadorContext;