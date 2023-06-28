import { Link } from "react-router-dom";
import "../pages/style/ErrorStyle.css";

/**
 * Error React component is called whenever
 * 			the url is not expected or
 * 			the user id requested is not known
 *
 * @returns {React.ReactElement} div with error message and link to Home page
 */

export default function Error() {
  return (
    <div className="errorPageContainer">
      <h2>Erreur !</h2>
      <p>
        Oups ! La page que vous demandez<br></br> n'existe pas.
      </p>
      <Link to="/" className="linkBackHome">
        Retour sur la page d'accueil
      </Link>
    </div>
  );
}
