import { Segment, Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './style.scss';


export default function SearchBar({ inputValue , onChangeInputValue, onSubmitForm}) {
    const handleChange = (event) => {
        onChangeInputValue(event.target.value);
    };

    const handleSubmit = () => {
        onSubmitForm();

    }
    return (
        <div className='searchbar'>
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Input 
                    value={inputValue}
                    icon='search'
                    iconPosition='left'
                    placeholder='votre recherche'
                    onChange={handleChange}
                    />
                </Form>
            </Segment>
            
        </div>
    );
}


SearchBar.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onChangeInputvalue: PropTypes.func.isRequired,
    onSubmitForm: PropTypes.func.isRequired,
}