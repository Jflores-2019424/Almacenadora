import React, { useEffect, useState } from 'react'
import { listStorage } from "../../User/api/UserApi"

export const ListaTareas = () => {
  const [storage, setStorage] = useState([])
    
  const reload = async()=>{
      const result = await listStorage();
      setStorage(result);
  }
  useEffect(()=>{
      reload();
      console.log(storage);
  }, []);
  return (
    <>
    
    <div className='container'>
      <h1>ALMACENADORA</h1>
    </div>
    <div>
    <div className='container'>
    <div className="row">
    <div className="col-md-4">
    <div className="card ali">
                    <div className="card-body">
    <form >
                            <div className="form-group">
                                <input type="text" className="form-control" maxLength="50" placeholder= "Nombre" required></input>
                            </div>
                            
                            <div className="form-group">
                               <textarea className="form-control" cols="30" rows="12" maxLength="500"  placeholder= "Descripición"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" maxLength="50" placeholder= "fecha inicio" required></input>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" maxLength="50" placeholder= "fecha cierre" required></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" maxLength="50" placeholder= "estado" required></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" maxLength="50" placeholder= "author" required></input>
                            </div>
                            
                            <button className="btn btn-success">Guardar</button>
                        </form>

    </div>
    </div>
    </div>
    </div>
 
    <div className=' col-md-7 position-absolute top-0 end-0 '>
      <table className="table table-bordered">
        <thead>
          <tr>
           <th>Nombre</th>
           <th>Descripcion</th>
           <th>Fecha de inicio</th>
           <th>Fecha de cierre</th>
           <th>Estado</th>
           <th>Author</th>
           <th></th>
          </tr>
        </thead>
        <tbody>
          {storage.map((storageActual)=>{
            return(
              <tr key = {storageActual._id}>
                <td>{storageActual.nombreTarea}</td>
                <td>{storageActual.descripcionTarea}</td>
                <td>{storageActual.fechaInicio}</td>
                <td>{storageActual.fechaFinal}</td>
                <td>{storageActual.estadoTarea}</td>
                <td>{storageActual.nombrePersona}</td>
                <td>
                </td>
                <td> <button className='btn btn-danger margen-button'>eliminar</button>
                  <button className='btn btn-warning margen-button'>Editar</button></td>
              </tr>
            );
          })}
              
        </tbody>
      </table>
    </div>
    </div>
    </div>
    
    </>
  )
}
