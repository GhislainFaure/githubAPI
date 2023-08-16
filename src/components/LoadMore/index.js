import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function LoadMore({ onClickButton }) {
  return (
    <Button fluid
            color="facebook"
            onClick={onClickButton}>
            Charger plus de résultats 
    </Button>
  );
}


LoadMore.propTypes = {
    onClickButton: PropTypes.func.isRequired,
}