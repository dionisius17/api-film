import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container>
        <Row>
            <Col>
            <div className='d-flex justify-content-center align-items-center vh-100'>
              <Card className="text-center">
                <Card.Header> DashBoard</Card.Header>
                <Card.Body>
                  <Card.Title>My profile</Card.Title>
                  <Card.Text>Heloo, my name is {user?.email}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{user?.emai}</Card.Footer>
              </Card>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard