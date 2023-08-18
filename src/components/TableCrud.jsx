import { Table } from "flowbite-react";
// import { getEmpleados } from './Form'; // Asegúrate de proporcionar la ruta correcta al archivo Form.js

export const TableCrud = ({ empleadosList = [] }) => {
  return (
    <section className=" mx-auto max-w-5xl overflow-x-auto ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Edad
            </th>
            <th scope="col" className="px-6 py-3">
              Pais
            </th>
            <th scope="col" className="px-6 py-3">
              Cargo
            </th>
            <th scope="col" className="px-6 py-3">
              Anis
            </th>
            <th scope="col" className="px-6 py-3" />
            <th scope="col" className="px-6 py-3" />
          </tr>
        </thead>

        <tbody>
          {empleadosList.map((empleado) => (
            <tr key={empleado.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th            
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {empleado.id}
              </th>
              <td className="px-6 py-4">{empleado.nombre}</td>
              <td className="px-6 py-4">{empleado.edad}</td>
              <td className="px-6 py-4">{empleado.pais}</td>
              <td className="px-6 py-4">{empleado.cargo}</td>
              <td className="px-6 py-4">{empleado.años}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
              <td>
              <button
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
