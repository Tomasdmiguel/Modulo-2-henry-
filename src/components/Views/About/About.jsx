 import style from "./About.module.css"
 const About = () => {
    return(
       <div  >
               <div className={style.carta}>
               <h1 className={style.titulo}>Bienvenido a mi integrador de henry</h1>
                  <div className={style.letras}>
                   
                     <p className={style.p}>Soy tomas un alumno de henry que va por el modulo Dos.</p>
                     <p className={style.p}> Es un modulo complicado en el cual las lecture son mas largas que en la anterior y tienes que tener mucha deciplina por que el tiempo corre.</p>
                     <p className={style.p}>Pero esto no es nada imposible. Para trinfunar no es solo sobre las ideas sino sobre hacer que estas se vuelvan realidad</p>
                   </div>
               </div> 
       </div>
    );

}
export default About; 