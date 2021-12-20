import { useState, useEffect } from "react";
import Cliente from "../components/Cliente";
import Spinner from "../components/Spinner";
const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = "http://localhost:4000/clientes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(!cargando);
      }, 500);
    };
    obtenerClientesAPI();
  }, []);

  const handleEliminar = async (id) => {
    const confirmar = confirm("Deseas eliminar este cliente?");
    if (confirmar) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url, {
          method: "DELETE",
        });
        await respuesta.json();

        const arrayClientes = clientes.filter((cliente) => cliente.id !== id);
        setClientes(arrayClientes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3 font-semibold ">Administra tus clientes</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-3 py-2 text-left">Nombre</th>
            <th className="p-2 text-left">Contacto</th>
            <th className="p-2 text-left">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        {!cargando && (
          <tbody>
            {clientes.map((cliente) => (
              <Cliente
                key={cliente.id}
                cliente={cliente}
                handleEliminar={handleEliminar}
              />
            ))}
          </tbody>
        )}
      </table>
      {cargando && <Spinner />}
    </div>
  );
};

export default Inicio;
