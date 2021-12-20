import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const ObtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }

      setCargando(!cargando);
    };
    ObtenerClienteAPI();
  }, []);

  return cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length === 0 ? (
    <p className="mt-3 font-semibold ">No hay Resultados</p>
  ) : (
    <>
      <h1 className="font-black text-4xl text-blue-900 ">
        Cliente -{" "}
        <span className="text-blue-900  font-bold">{cliente.nombre}</span>
      </h1>
      <p className="mt-3 font-semibold ">Información del Cliente</p>

      <p className="text-2xl text-gray-600 pb-2 py-10">
        <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
        {cliente.email}
      </p>
      {cliente.telefono && (
        <p className="text-2xl text-gray-600 pb-2">
          <span className="text-gray-800 uppercase font-bold">Telefono:</span>{" "}
          {cliente.telefono}
        </p>
      )}
      <p className="text-2xl text-gray-600 pb-2">
        <span className="text-gray-800 uppercase font-bold">Empresa:</span>{" "}
        {cliente.empresa}
      </p>
      {cliente.notas && (
        <p className="text-2xl text-gray-600 pb-2">
          <span className="text-gray-800 uppercase font-bold">Notas:</span>{" "}
          {cliente.notas}
        </p>
      )}
    </>
  );
};

export default VerCliente;
