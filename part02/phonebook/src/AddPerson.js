import { changeNumber, postPersons } from "./services/persons/persons"

export function AddPerson({persons, setPersons, setNotification}) {
  /* 
    FUNCIÓN QUE TOMA LOS VALORES DE LOS INPUTS,
    LOS COLOCA EN UN ARRAY Y LO RETORNA COMO 
    CALLBACK DE LA FUNCIÓN
  */
  const handleInputs = (e) => {
    const values = []
    for (let i = 0; i < e.target.length - 1; i ++){
      // console.log(e.target[i])
      values.push(e.target[i].value)
      e.target[i].value = ''
    }
    return values
  }
  /*
    FUNCIÓN QUE VERIFICA QUE LA PERSONA INTRODUCIDA
    EN LOS INPUTS NO ESTÉ REPETIDA
    DEVUELVE UN OBJETO CON LOS CAMPOS DUPLICATE Y ID SI
    LA PERSONA ES REPETIDA
    O NULL SI LA PERSONA NO ES REPETIDA
  */
  const isDuplicate = (newPerson) => {
    persons.forEach( person => {
      if (
        person.name === newPerson.name
      ){
        return ({duplicate : true, duplicateId : person.id})
      }
    })
    return(null)
  }
  /*
    FUNCIÓN QUE CAMBIA EL NÚMERO DE UNA PERSONA EXISTENTE EN
    LA DB Y ACTUALIZA EL ESTADO EN PERSONS
  */
  const replaceNumber = (newPerson, duplicateId) => {
    const errorMessage = `Information of ${newPerson.name} has been removed from server`
    // CAMBIAMOS EL NÚMERO EN LA DB
    changeNumber(newPerson, duplicateId)
      // CAPTURAMOS EL ERROR Y MOSTRAMOS UNA NOTIFICACIÓN AL USUARIO
      .catch(() => setNotification({message: errorMessage, error : true}))
    
    // GENERAMOS UN NUEVO ARRAY CON LAS PERSONAS QUE NO HAN SIDO CAMBIADAS
    const personsNotChanged = persons.filter(person => person.id !== duplicateId)
    /*
      ACTUALIZAMOS EL ESTADO CON LAS PERSONAS QUE NO HAN SIDO CAMBIADAS 
      Y LE AGREGAMOS LA PERSONA CAMBIADA CON SU NUEVO NÚMERO
    */
    setPersons([...personsNotChanged], newPerson)
    // ENVIAMOS NOTIFICACIÓN AL USUARIO
    setNotification({message:`Number replaced - ${newPerson.name}`, error : false})
  }
  /*
    FUNCIÓN PRINCIPAL, SE ENCARGA DE MANEJAR LOS DATOS INGRESADOS
    POR EL USUARIO Y USARLOS PARA EL FIN DE LA APP
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const [newName, newNumber] = handleInputs(e);
    const newPerson = {
      name : newName,
      number : newNumber
    }
    const {duplicate, duplicateId} = isDuplicate(newPerson)
    if (duplicate) {
      // VERIFICAMOS SI QUIERE CAMBIAR EL NÚMERO DE LA PERSONA
      const confirmationMessage = 
        `${newPerson.name} is already added to phonebook, replace the old number with the new one?`
      if (window.confirm(confirmationMessage)){
        replaceNumber(newPerson, duplicateId)
      }
      /*
        SI NO QUIERE CAMBIAR EL NÚMERO, NO HACEMOS NADA,
        YA QUE LA PERSONA SE ENCUENTRA EN LA DB
      */
    } else {
      /*
        SI NO ES REPETIDO SIGNIFICA QUE ES UN NUEVO NÚMERO
        POR LO TANTO LO AÑADIMOS A LA DB Y AL ESTADO DE PERSONS
      */
      setPersons(prev => {
        // AÑADIMOS A LA DB
        postPersons(newPerson)  
        // MOSTRAMOS MENSAJE DE AGREGACIÓN
        setNotification({message : `Added ${newPerson.name}`, error : false})
        // ACTUALIZAMOS EL ESTADO DE PERSONS
        return [...prev, newPerson]
      })    
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="number">number:</label>
          <input id="number" name="number" required/>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>    
  )
}