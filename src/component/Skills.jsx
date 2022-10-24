import pc2 from '../assets/pc2.png';
import '../style/Skills.css'
import { useState } from 'react';
import { FaCss3Alt, FaHtml5, FaReact,FaGitSquare,FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress,SiNodedotjs,SiMysql,SiMongodb,SiBootstrap,SiFirebase } from "react-icons/si";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Skills = () => {
        const [coll, setColl] = useState(false)
        console.log(coll)
        const handleClick = ()=> {
         setColl(!coll)
        };
     return (
       <section id="Skills" className="skills">
        
        <div className='skills-title'>
            <h2>MY SKILLS</h2>
            <div className="divider"></div>
        </div>
        <div className='skills-container'> 
        <div className="my-skills">
              <img src={pc2} alt="computadora" />
         </div>

               <div className="skills-info">
                 <p>
                   Tengo las habilidades de un desarrollador web.
                   <br /> Estas son habilidades específicas necesarias para
                   desempeñarme con éxito en un rol de desarrollador web. Tener
                   estas habilidades permite una codificación correcta y un
                   sitio web funcional y un mejor rendimiento al realizar las
                   tareas diarias en el trabajo. <br /> Como con cualquier
                   trabajo, estoy constantemente desarrollando mis habilidades
                   como desarrollador. Practicando, aprendiendo los fundamentos
                   de la programación, habilidades generales de diseño y código
                   de prueba y depuración.{" "}
                 </p>
                 <TrackVisibility>
                   {({ isVisible }) => 
                     <div
                       className={
                         isVisible ? "animate__animated animate__heartBeat" : ""
                       }
                     >
                       <button onClick={handleClick} className="download">
                         Mis habilidades
                       </button>
                     </div>}
                 </TrackVisibility>
               </div>
           
         </div>
         <div className={coll ? "skillsContent active" : "skillsContent"}>
           <div className="about-icons">
             <FaCss3Alt size={100} />
             Css
           </div>
           <div className="about-icons">
             <FaHtml5 size={100} />
             Html
           </div>
           <div className="about-icons">
             <IoLogoJavascript size={100} />
             JavasCript
           </div>
           <div className="about-icons">
             <FaReact size={100} />
             React
           </div>
           <div className="about-icons">
             <SiExpress size={100} />
             Express
           </div>
           <div className="about-icons">
             <SiNodedotjs size={100} />
             NodeJS
           </div>
           <div className="about-icons">
             <SiMysql size={100} />
             MySQL
           </div>
           <div className="about-icons">
             <SiMongodb size={100} />
             Mongodb
           </div>
           <div className="about-icons">
             <SiBootstrap size={100} />
             Bootstrap
           </div>
           <div className="about-icons">
             <FaGitSquare size={100} />
             Git
           </div>
           <div className="about-icons">
             <SiFirebase size={100} />
             Firebase
           </div>
           <div className="about-icons">
             <FaAws size={100} />
             AWS
           </div>
        </div>
       </section>
     ); 
};