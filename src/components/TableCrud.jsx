// import { getEmpleados } from './Form'; // Asegúrate de proporcionar la ruta correcta al archivo Form.js
// import { useState } from "react";
import { Button, Modal } from "flowbite-react"; // Importar componentes de la biblioteca UI
import { HiOutlineExclamationCircle } from "react-icons/hi";


export const TableCrud = ({
  empleadosList = [],
  Editarempledos,
  deleteEmpl,
  openModal,
  setOpenModal
}) => {
  // const [openModal, setOpenModal] = useState(false);

  

  return (
    <section className=" mx-auto max-w-5xl overflow-x-auto ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-[1px] border-gray-600">
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
              Años
            </th>
            <th scope="col" className="px-6 py-3" />
            <th scope="col" className="px-6 py-3" />
          </tr>
        </thead>

        <tbody>
          {empleadosList.map((empleado) => (
            <tr
              key={empleado.id}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
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
                  onClick={() => {
                    Editarempledos(empleado);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={()=>
                  setOpenModal(true)
                  }
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Eliminar
                </button >
                <Modal
                  show={openModal}
                  size="md"
                  popup
                  onClose={() => setOpenModal(false)}
                  className="bg-opacity-[1px] backdrop-blur-sm"
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center ">
                      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Esta seguro de eliminar este empleado?
                      </h3>
                      <div className="flex justify-center gap-4">
                        <Button
                          color="failure"
                          onClick={() => setOpenModal(false)}
                        >
                          Si, Estoy seguro.
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal(false)}
                        >
                          No, cancelar
                        </Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
