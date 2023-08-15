import { Card } from 'semantic-ui-react';
import './style.scss';
import Repo from '../Repo';

export default function ReposResults() {
    return (
        <div className='repos-results'>
           <Card.Group itemsPerRow={3} stackable>
           <Repo />
           <Repo />
           <Repo />
           <Repo />
           <Repo />
           </Card.Group>
        </div>
    );
}

