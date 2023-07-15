import useCotizador from "../hook/useCotizador";
import { MARCAS, Years, PLANES } from "../constants";
import Error from "./Error";

function Formulario() {
  const { HandleChangeDatos, datos, error, setError, CotizarSeguro } =
    useCotizador();

  // Funcion para validar el formulario cuando se hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    CotizarSeguro();
   
  };
  return (
    <>
      {error !== "" ? <Error /> : ""}
      <form onSubmit={handleSubmit} >
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => HandleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">--Seleccione Marca--</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Year
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => HandleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">--Seleccione Year--</option>
            {Years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Elige un Plan
          </label>
          <div className="flex items-center gap-3">
            {PLANES.map((plan) => (
              <div key={plan.id}>
                <label className="uppercase mr-1">{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => HandleChangeDatos(e)}
                />
              </div>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
}

export default Formulario;
