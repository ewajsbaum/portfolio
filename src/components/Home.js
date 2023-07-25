import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cards from './Cards.js';
import resume from '../resume.pdf'


export default function App() {
  return (
    <body>

      <div className="slide container-fluid bg-black">
        <div className="container col-xxl-8 px-4 py-5 bg-black">
          <div className="row flex-lg align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Esti Wajsbaum</h1>
              <p className="lead text-white">I am working towards my Bachelor's degree in Science of Computer Programming and
                Technology from Woodmont College in conjuction with PCS. I get a thrill from combining logic and
                creativity to develop top-rate computer software. I am proficient in C#, HTML, CSS, SQL, JavaScript, React and Node.js.
                Thank you for visiting my portfolio! </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <NavLink type="button" className="btn btn-light btn-lg px-4 me-md-2" to='/projects'>Projects</NavLink>
                <a type="button" className="btn btn-outline-danger btn-lg px-4" href={resume} target="_blank" rel="noreferrer">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cards />

      <div className="navbar-bottom bg-dark">
        <div id="foot" className="text-light"> &copy; 2023</div>
      </div>
    </body >
  );
}
