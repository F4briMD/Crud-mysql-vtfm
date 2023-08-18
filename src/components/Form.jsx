
// import { useEffect, useState } from "react";
import axios from 'axios';
// import {getEmpleados} from '../App.jsx'

const Form = ({setNombre,setEdad,setPais,setCargo,setAños,
              nombre,edad,pais,cargo,años,getEmpleados,setModal}) => {
    

    const add = () => {
        axios.post('http://localhost:3001/create', {
            nombre: nombre,
            edad: edad,
            pais: pais,
            cargo: cargo,
            años: años
        }).then(() => {
            alert('Empleado registrado');
            getEmpleados();
        });
    }

    const cerrarModal=()=>{
        setModal(false)
    }
    

    return (
      <section className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">       
      <main className="flex flex-col justify-center items-center ">
        
        <div className='bg-white rounded-b-xl w-96'>
        <div className='flex flex-row justify-between p-3 w-full bg-blue-500'>
          <h2 className=' text-2xl font-semibold text-slate-200'> Nuevo Empleado</h2>
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
            onChange={(event) => {
              setNombre(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="my-2">
          <h3 className="pr-2 pb-1">Edad:</h3>
          <input
            type="text"
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
            onChange={(event) => {
              setCargo(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="my-2">
          <h3 className="pr-2 pb-1">Años:</h3>
          <input
            type="text"
            onChange={(event) => {
              setAños(event.target.value);
            }}
            className="inputempleado"
          />
        </div>
        <div className="flex flex-row pt-2 gap-x-2 my-3">
          <button
            type="sumit"
            onClick={add}
            className=" text-white font-semibold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded-lg "
          >
            Agregar
          </button>
          <button
            type="sumit"
            onClick={cerrarModal}
            className=" text-white font-semibold bg-gray-400 hover:bg-gray-500 py-2 px-4 rounded-lg "
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
