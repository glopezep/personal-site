import {
  Button,
  Col,
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
} from 'reactstrap'

function MainCard (props) {
  return (
    <Card body className="text-center" style={{ borderColor: 'transparent', padding: '1.5em' }}>
      <CardBody>
        <CardTitle style={{ fontSize: '3.6em' }}>{props.title}</CardTitle>
        <CardSubtitle style={{ fontSize: '1.8em' }}>{props.subTitle}</CardSubtitle>
        <CardText style={{ fontSize: '1.1em', marginTop: '1em' }}>{props.description}</CardText>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {props.children}
        </div>
      </CardBody>
    </Card>
  )
}

export default MainCard