import { Message as MessageSUI } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './style.scss';

export default function Message({content}) {
    return (
        <div className='message'>
            <MessageSUI content={content}/>
        </div>
    );
}
Message.propTypes = {
    content: PropTypes.string.isRequired,
};