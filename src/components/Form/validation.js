// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex = /^(?=.*\d).{6,10}$/;
//Funcion para validar 
 function validate(userData ) {
  const errors= { email:'', password:'' }
  
  if(!regexEmail.test(userData.email)) errors.email ='Debe ser un correo electronico'

  if(!passwordRegex.test(userData.password)) errors.password = 'Contraseña invalid'
  return errors;

}


export default validate