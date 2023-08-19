import { useState } from 'react';
import { Button, Modal } from 'flowbite-react'; // Importar componentes de la biblioteca UI
import { HiOutlineExclamationCircle } from 'react-icons/hi'; // Importar el icono de react-icons

export default function Deletemodal() {
  const [openModal, setOpenModal] = useState(false); // Usar un valor booleano en lugar de string
  

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
            <Button color="failure" onClick={() => 
                setOpenModal(false)}>
                Yes, Im sure
              </Button>
              <Button color="gray" onClick={() => 
                setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
    
  )
}



