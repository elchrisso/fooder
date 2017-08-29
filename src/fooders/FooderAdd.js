import './Fooder.css'
import React, { Component } from 'react'
import { Container, Row, Col, Card, CardHeader, CardBlock } from 'reactstrap'
import { graphql } from 'react-apollo'

import FooderAddForm from './FooderAddForm'
import foodersService from './service'

class FooderAdd extends Component {

  handleAddFooderAttempt = (data) => {
    this.props.mutate({
      variables: data
    }).then((response) => {
      alert("User added, join us fooder!")
    }).catch((err) => {
      alert("There has been an error, please try again." + err)
    })
}

  render () {
    return (
      <Container className="add-fooder-container">
        <Row>
          <Col>
            <Card>
              <CardHeader>Create your fooder account</CardHeader>
                <CardBlock>
                  <FooderAddForm onSubmit={this.handleAddFooderAttempt}/>
                </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default graphql(foodersService.createUser)(FooderAdd)