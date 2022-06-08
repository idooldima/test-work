import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersStart } from '../../store/users/actions';
import { usersListSelector } from '../../store/users/selectors';
import { map } from 'lodash';
import UserCard from './userCard';
import { Container, Row } from 'reactstrap';
import './users.styles.scss';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(usersListSelector);
  useEffect(() => {
    dispatch(getUsersStart());
  }, []);

  return (
    <Container fluid>
      <Row>
        {map(users, (user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Row>
    </Container>
  );
}
