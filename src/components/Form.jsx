
// import { useEffect, useState } from "react";
import axios from 'axios';


const Form = ({setId,setNombre,setEdad,setPais,setCargo,setAños,id,
              nombre,edad,pais,cargo,años,getEmpleados,setModal,editar,setEditar,clearInputs}) => {
    

    const add = () => {
        axios.post('http://localhost:3001/create', {
            nombre: nombre,
            edad: edad,
            pais: pais,
            cargo: cargo,
            años: años
        }).then(() => {          
            getEmpleados()
             // alert('Empleado registrado');
             cerrarModal()
        });
    }
    const update = ()=>{
        axios.put('http://localhost:3001/update',{
          id: id,
          nombre: nombre,
          edad: edad,
          pais: pais,
          cargo: cargo,
          años: años
        }).then(()=>{
          getEmpleados()
          cerrarModal()
        })
    }

    const cerrarModal=()=>{
      setNombre('')
      setEdad('')
      setCargo('')
      setPais('')
      setAños('')
      setId('')

      setEditar(false)
      setModal(false)
    }
    

    return (
      <section className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">       
      <main className="flex flex-col justify-center items-center ">
        
        <div className='bg-white rounded-b-xl w-96'>
        {/* <div className='flex flex-row justify-between p-3 w-full bg-blue-500'> */}
        <div className={`flex flex-row justify-between py-3 px-8 w-full ${editar ? 'bg-green-600' : 'bg-blue-500'}`}>
          {
              editar ? 
              <h2 className=' text-2xl font-semibold text-slate-200'> Actualizar Empleado</h2>
              :
              <h2 className=' text-2xl font-semibold text-slate-200'> Nuevo Empleado</h2>
            }
          {/* <h2 className=' text-2xl font-semibold text-slate-200'> Nuevo Empleado</h2> */}
        <button className=' cursor-pointer '
        onClick={cerrarModal}>
          X
        </button>
        </div>
        <div className='px-8 py-2 '>
        <div className="my-2 ">
          <h3 className="pr-2 pb-1 text-black">Nombre:</h3>
          <input
            type="text"
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="my-2">
          <h3 className="pr-2 pb-1">Edad:</h3>
          <input
            type="number"
            value={edad}
            onChange={(event) => {
              setEdad(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="my-2">
          <h3 className="pr-2 pb-1">Pais:</h3>
          <input
            type="text"
            value={pais}
            onChange={(event) => {
              setPais(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="my-2">
          <h3 className="pr-2 pb-1">Cargo:</h3>
          <input
            type="text"
            value={cargo}
            onChange={(event) => {
              setCargo(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="my-2">
          <h3 className="pr-2 pb-1">Años:</h3>
          <input
            type="number"
            value={años}
            onChange={(event) => {
              setAños(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="flex flex-row pt-2 gap-x-2 my-3">
          {
            editar? (
            <button
            type="sumit"
            onClick={()=>{
              update()
              cerrarModal()
              
            }}
            className=" text-white font-semibold bg-green-700 hover:bg-green-800 py-2 px-4 rounded-lg "
          >
            Actulizar
          </button>)
          :(
          <button
          type="sumit"
          onClick={()=>{
            add()
            cerrarModal()
          }}
          className=" text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded-lg "
        >
          Agregar
        </button>
            
          )}
          {/* <button
            type="sumit"
            onClick={add}
            className=" text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded-lg "
          >
            Agregar
          </button> */}
          <button
            type="sumit"
            onClick={()=>{
              cerrarModal()
              
            }}
            className=" text-white font-semibold bg-gray-400 hover:bg-red-700 py-2 px-4 rounded-lg "
          >
            Cancelar
          </button>
        </div>
        </div>
        </div>
      </main>
    </section>
    
    );
}

export default Form;
