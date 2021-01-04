import { Jumbotron } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function NotFound() {
  
    const { t } = useTranslation();

    return (
      <Jumbotron>
        <h1 className="display-3 mb-3">{ t('not_found_message') }</h1>
      </Jumbotron>
    );
  }
  
  export default NotFound;
  