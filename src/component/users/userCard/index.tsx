import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import { UserType } from '../../../store/users/types';
import '../users.styles.scss';
type Props = { user: UserType };

export default function UserCard({ user }: Props) {
  return (
    <Col md="2">
      <Card className="card-user">
        <CardImg alt="Card image cap" src={user.owner.avatar_url} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {user.full_name}
          </CardSubtitle>
          <Col>
            <CardText>{user.owner.repos_url}</CardText>
          </Col>
          <Col>
            <CardText>{user.description}</CardText>
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
}
