import Formulario from "./Formulario";
import useCotizador from "../hook/useCotizador";
import Resumen from "./Resumen";


function AppSeguro() {
  const { resultado } = useCotizador();
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black capitalize">
          Cotizador de seguros de autos
        </h1>
      </header>

      <main className="bg-white max-w-lg md:w-2/3 lg-w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />
        {resultado && <Resumen resultado={resultado} />}
      </main>
    </>
  );
}

export default AppSeguro;
