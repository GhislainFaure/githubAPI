import { Card, Image } from 'semantic-ui-react'
import './style.scss';

export default function Repo() {
    return (
        <div className='repo'>
            <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span >Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
        </div>
    );
}