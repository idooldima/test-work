import { Col, Input, Row } from 'reactstrap';
type Props = { onSearch: (value: string) => void };

export default function Search({ onSearch }: Props) {
  const handleChange = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    onSearch(value);

  return (
    <Row className="justify-content-center">
      <Col md="3">
        <Input className="search" placeholder="Search" type="text" onChange={handleChange} />
      </Col>
    </Row>
  );
}
