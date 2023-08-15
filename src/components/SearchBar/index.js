import { Segment, Form } from 'semantic-ui-react'
import './style.scss';


export default function SearchBar() {
    return (
        <div className='searchbar'>
            <Segment>
                <Form>
                    <Form.Input 
                    icon='search'
                    iconPosition='left'
                    placeholder='votre recherche'
                    />
                </Form>
            </Segment>
            
        </div>
    );
}