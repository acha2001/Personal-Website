import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from './data.json';

  

const ProjectCard = (props) => {
  const imgPath = data[props.id].photo_path;
  const hrefID = data[props.id].hrefID;
  
  return (
      <Card style={{ width: '20rem' }}>
        <img variant="top" src={imgPath}/>
        <Card.Body>
        <Card.Title> { data[props.id].name }</Card.Title>
        <Card.Text>
            {data[props.id].description }
        </Card.Text>
        <Button href={hrefID} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      );
  };
  export default ProjectCard;
  