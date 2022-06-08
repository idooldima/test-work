import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersStart } from '../../store/users/actions';
import { usersListSelector } from '../../store/users/selectors';
import { map } from 'lodash';
import UserCard from './userCard';
import { Container, Row } from 'reactstrap';
import './users.styles.scss';
import Search from '../search';
import { UsersType } from 'src/store/users/types';
import usePagination from 'src/hooks';
import Pagination from '../pagination';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(usersListSelector);
  const [filteredUsers, setFilteredUsers] = useState<UsersType>([]);
  const perPage = 6;
  const [paginationUsers, curPage, onChangePage] = usePagination({ items: filteredUsers, perPage });
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
  useEffect(() => {
    dispatch(getUsersStart());
  }, []);

  const onSearch = (value: string) => {
    setFilteredUsers(users.filter((user) => user.name.includes(value)));
  };
  return (
    <Container fluid>
      <Row>
        <Search onSearch={onSearch} />
      </Row>
      <Row>
        {map(paginationUsers, (user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Row>
      <Row>
        <Pagination
          curPage={curPage}
          perPage={perPage}
          items={filteredUsers}
          onChangePage={onChangePage}
        />
      </Row>
    </Container>
  );
}
