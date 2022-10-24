import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import FrancoLind from '../assets/FrancoLind.pdf';
import pc from '../assets/pc.png';
import '../style/Main.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

 export const Main = () => {
      const [loopNum, setLoopNum ] = useState(0);
      const [isDeleting, setIsDeleting]= useState(false);
      const toRotate = ["FrontEnd developer", "BackEnd developer", "Web Designer" ];
      const [text, setText]= useState('');
      const [delta, setDelta] = useState(300- Math.random()*100);

      useEffect(() => {
        let ticket = setInterval(()=>{
          tick();
        },delta)

        return () =>{clearInterval(ticket)};
      }, [text]);

      const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);
        if(isDeleting){
          setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
          setIsDeleting(true);
          setDelta(period);
        }else if (isDeleting && updatedText === ''){
          setIsDeleting(false);
          setLoopNum(loopNum+1);
          setDelta(300);
        }
      }

     return (
           <section id="Main" className="main">
            
               <div className="info-container">
               <h1>
                 <span> Franco </span>Lind <br />
                 <span className="txt-rotate">
                   <span className="wrap">{text}</span>
                 </span>
               </h1>
               <p className="info-content">
                 Me encata todo el mundo de la programacion,
                 <br />
                 he aprendido las mejores tecnologías para crear aplicaciones
                 web y Tengo experiencia desarrollando paginas completas tanto
                 en el backend y frontend.
               </p>

               <Link to={FrancoLind} target="_blank" download>
                 <button className="download">Download CV</button>
               </Link>
             </div>
             <div className='main-img'>
             <TrackVisibility>
              {({isVisible})=>
              <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
             <img src={pc} alt="pc dibujo" />
             </div>}
              </TrackVisibility>
             </div>
           </section>
         
     );
};

