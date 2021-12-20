import { useNavigate } from "react-router-dom";
const Cliente = ({ cliente, handleEliminar }) => {
  const { nombre, empresa, email, telefono, notas, id } = cliente;
  const navigate = useNavigate();

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">{nombre}</td>
      <td className="p-5 ">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefono}
        </p>
      </td>
      <td className="p-5">{empresa}</td>
      <td className="p-5 ">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 block w-full p-2 
            text-white uppercase font-bold text-xs "
          type="button"
          onClick={() => {
            navigate(`/clientes/${id}`);
          }}
        >
          Ver
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 block w-full p-2
           text-white uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => {
            navigate(`/clientes/editar/${id}`);
          }}
        >
          Editar
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 block w-full p-2
           text-white uppercase font-bold text-xs mt-3"
          type="button"
          onClick={() => {
            handleEliminar(id);
          }}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
