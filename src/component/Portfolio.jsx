import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import web1 from '../assets/web1p.png'
import web2 from '../assets/web2p.png'
import bar from '../assets/barp.png'
import web4 from '../assets/web4p.png'
import web5 from '../assets/web5p.png'
import web6 from '../assets/web6p.png'
import '../style/portfolio.css';

export const Portfolio = () => {
    return (
      <section id="Portfolio" className="portfolio">
          <div className="portafolio-title">
          <h2>MY PORTFOLIO</h2>
          <div className="divider"></div>
          </div>
          <div className="portafolio-container">
          <div className="portfolio-headings">
          <div className="container">
          <div className="card">
              <img className="card-img" src={web4} alt="" />
              <div className="card-title">
                <h2>Lind Brothers</h2>
                  <a href="https://github.com/francolind/clienteLindBrothers" target="blank" className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                  </a>
              </div>
              <button className="poject-details download ">
                <a href="https://lindbrothers.netlify.app/" target="_blank">poject-datails</a>
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web1} alt="" />
              <div className="card-title">
                <h2>Veterinary</h2>
                <a href={'https://github.com/francolind/veterinary'} target="_blank"  className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </a>
              </div>
              <button className="poject-details download ">
                 <a href="https://veterinary-spaick.netlify.app/" target="_blank" >poject-datails</a> 
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web2} alt="" />
              <div className="card-title">
                <h2>Trade Cypto</h2>
                <a href={'https://github.com/francolind/coinbyte'} target="_blank"  className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </a>
              </div>
              <button className="poject-details download ">
                 <a href="https://coinbyte.netlify.app/" target="_blank" >poject-datails</a> 
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={bar} alt="" />
              <div className="card-title">
                <h2>purelite</h2>
                <a href={'https://github.com/francolind/coinbyte'} target="_blank"  className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                  </a>
              </div>
              <button className="poject-details download ">
              <a href="https://purelite.netlify.app/" target="_blank" >poject-datails</a> 
              </button>
            </div>
           
            <div className="card">
              <img className="card-img" src={web5} alt="" />
              <div className="card-title">
                <h2>Burger week</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
            <div className="card">
              <img className="card-img" src={web6} alt="" />
              <div className="card-title">
                <h2>Hambuerger</h2>
                <Link to={"#"} className="icons">
                  <FaGithub style={{ color: "white", fontSize: "50px" }} />
                </Link>
              </div>
              <button className="poject-details download ">
                poject-datails
              </button>
            </div>
          </div>
        </div>
        <div className="return">
            <img src="" alt="" />
        </div>
          </div>
      </section>
    );
};