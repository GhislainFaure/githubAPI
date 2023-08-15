import { Message as MessageSUI } from 'semantic-ui-react'
import './style.scss';

export default function Message() {
    return (
        <div className='message'>
            <MessageSUI content='La recherche a donné 455454545 résultats'/>
        </div>
    );
}