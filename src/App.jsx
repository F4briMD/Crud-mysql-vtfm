import { useEffect, useState } from "react";
import axios from 'axios';
import { TableCrud } from "./components/TableCrud";
import Form from './components/Form'
import Navbarra from "./components/Navbarra";
import Deletemodal from "./components/Deletemodal";


function App() {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState();
  const [pais, setPais] = useState('');
  const [cargo, setCargo] = useState('');
  const [años, setAños] = useState();
  const [id,setId] = useState(0);

  const [modal,setModal] = useState(false)
  const [openModal, setOpenModal] = useState(false);

  const [editar,setEditar] = useState(false);

  const [empleadosList,setEmpleados]= useState([]);


   const getEmpleados = () => {
      axios.get('http://localhost:3001/empleados').then((response) => {
          setEmpleados(response.data);
      });
  }
  useEffect(()=>{
      getEmpleados();
  },[])


  const handleNuevoEmpleado =()=>{
    setModal(true)
  }

  const Editarempledos=(empleado)=>{
      setEditar(true)
      setModal(true)

      setNombre(empleado.nombre)
      setEdad(empleado.edad)
      setCargo(empleado.cargo)
      setPais(empleado.pais)
      setAños(empleado.años)
      setId(empleado.id)
  }

  const deleteEmpl = (id)=>{
    axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
      
      getEmpleados()
      
    })
}

  // const clearInputs =()=>{
  //   setNombre('')
  //     setEdad('')
  //     setCargo('')
  //     setPais('')
  //     setAños('')
  //     setId('')

  //     setEditar(false)
      
  // }


  return (
    <>

    <Navbarra/>

    {/* <Deletemodal/> */}

    <div className="mx-auto items-center flex justify-between p-5  max-w-7xl  overflow-x-auto text-right bg-slate-600">
      <h2 className="text-3xl text-gray-300">Lista Empleados</h2>
      <button type="button"
      onClick={handleNuevoEmpleado}
      className="text-white font-semibold bg-green-700 hover:bg-green-800 py-2 px-4 rounded-lg"
      >Nuevo</button>
    </div>

 
      
      {modal && <Form
        setNombre={setNombre}
        setEdad={setEdad}
        setPais={setPais}
        setCargo={setCargo}
        setAños={setAños}
        setId={setId}
        id={id}
        nombre={nombre}
        edad={edad}
        pais={pais}
        cargo={cargo}
        años={años}
        getEmpleados={getEmpleados}

        setModal={setModal}

        editar={editar}
        setEditar={setEditar}

        // clearInputs={clearInputs}
      />}

      <TableCrud
        empleadosList={empleadosList}
        setEmpleados={setEmpleados}
        Editarempledos={Editarempledos}
        deleteEmpl={deleteEmpl}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export default App
