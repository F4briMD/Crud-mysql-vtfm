import { useEffect, useState } from "react";
import axios from 'axios';
import { TableCrud } from "./components/TableCrud";
import Form from './components/Form'
import Navbarra from "./components/Navbarra";



// import { Navbarcrud } from "./components/Navbarcrud.jsx";
// import TableCrud from './components/TableCrud'


function App() {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState('');
  const [cargo, setCargo] = useState('');
  const [años, setAños] = useState(0);

  const [modal,setModal] = useState(false)

  const [empleadosList,setEmpleados]= useState([]);

  //   export const add = () => {
  //     axios.post('http://localhost:3001/create', {
  //         nombre: nombre,
  //         edad: edad,
  //         pais: pais,
  //         cargo: cargo,
  //         años: años
  //     }).then(() => {
  //         alert('Empleado registrado');
  //         getEmpleados();
  //     });
  // }
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


  return (
    <>

    <Navbarra/>

    <div>
      <button type="button"
      onClick={handleNuevoEmpleado}
      >Nuevo Empleado</button>
    </div>

 
      
      {modal && <Form
        setNombre={setNombre}
        setEdad={setEdad}
        setPais={setPais}
        setCargo={setCargo}
        setAños={setAños}
        nombre={nombre}
        edad={edad}
        pais={pais}
        cargo={cargo}
        años={años}
        getEmpleados={getEmpleados}

        setModal={setModal}
      />}

      <TableCrud
        empleadosList={empleadosList}
        setEmpleados={setEmpleados}
      />
    </>
  )
}

export default App
