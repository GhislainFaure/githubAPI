import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types'
import './style.scss';
import Repo from '../Repo';

export default function ReposResults({ results }) {
    return (
        <div className='repos-results'>
          <Card.Group itemsPerRow={3} stackable>
            {results.map((result) => {
              return (
              <Repo 
              key={result.id} 
              // imageUrl={result.imageUrl}
              // title={result.title}
              // owner={result.owner}
              // description={result.description ?? 'no description' }     
              {...result}   
              />)
            })}   
          </Card.Group>
        </div>
    );
}

ReposResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,

  }

  

