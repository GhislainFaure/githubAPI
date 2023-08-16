import { Card,Icon, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './style.scss';

export default function Repo({
  imageUrl,
  title,
  owner,
  description,
}) {
    return (
        <div className='repo'>
            <Card>
    <Image src={imageUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span >{owner}</span>
      </Card.Meta>
      <Card.Description>
      {description}
      </Card.Description>
    </Card.Content>
  </Card>
        </div>
    );
}

Repo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
}
