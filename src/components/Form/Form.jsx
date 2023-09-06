import { useState } from 'react';
import style from './Form.module.css'
import validate from './validation';

const Form = (props) => {
    const [userData, setuserData] = useState({email:'', password:''})
    const [errors, setErrors] = useState({}); 
    
    const handleChange = (event) => {
        const properety = event.target.name;
        const value = event.target.value;
        setuserData({...userData, [properety]: value})
        setErrors(validate({...userData, [properety]: value}))
       
     }

const handleSubmit = (event) => {
    event.preventDefault()
    props.login(userData)

}
   
    return(
<div>

        <form onSubmit={handleSubmit} className={style.form}>
           <div>
            <div className={style.caja1}>

                <label className={style.label} htmlFor="email">Email</label>
                <input onChange={handleChange}  value={userData.email} type="text" name='email' />
                <p >{errors.email}</p>
            </div>
            <div className={style.caja2}>
                <label className={style.label} htmlFor="password">Password</label>
                <input  onChange={handleChange}  value={userData.password} type="text" name='password' />
                <p >{errors.password}</p>
            </div>
            <button  className={style.boton} type="submit">Submit</button>
            </div>
        </form>


</div>);

}


export default Form