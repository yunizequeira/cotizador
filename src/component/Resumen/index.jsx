import { useState } from "react";
import { MARCAS } from "../../constants";
import { PLANES } from "../../constants";
import Spiner from "../Spiner";

const Resumen = ({ resultado }) => {
  const [show, setShow] = useState(true);
  console.log(MARCAS);
  console.log(resultado);

  const getMarca = (id) => {
    const marca = MARCAS.filter((marc) => marc.id == id);
    return marca[0].nombre;
  };
  const getPlan = (id) => {
    const plan = PLANES.filter((plan) => plan.id == id);
    return plan[0].nombre;
  };
  const spin = () => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
    return <Spiner />;
  };

  return (
    <div className="bg-blue-200 mt-10 p-4">
      <h2 className="text-center text-2xl font-black">Resumen</h2>
      <div className="flex justify-center">
        {show ? (
          spin()
        ) : (
          <div className="text-center">
            <p className="font-bold text-lg capitalize">
              marca:{" "}
              <span className="text-base font-semibold  ">
                {getMarca(resultado.datos.marca)}
              </span>
            </p>
            <p className="font-bold text-lg capitalize">
              Plan:{" "}
              <span className="text-base font-semibold">
                {getPlan(resultado.datos.plan)}
              </span>
            </p>
            <p className="font-bold text-lg capitalize">
              Year:{" "}
              <span className="text-base font-semibold">
                {resultado.datos.year}
              </span>
            </p>
            <h4 className="capitalize text-2xl font-bold">
              Total cotizar : {resultado.resultado}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resumen;
