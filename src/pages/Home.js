import { Jumbotron } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
      <Jumbotron>
        <h1 className="display-3 mb-3">{ t("title") }</h1>
        <p className="lead">{ t("subtitle") }</p>
      </Jumbotron>
    );
  }
  
  export default Home;
  