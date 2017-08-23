import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class RecipeAdd extends Component {
  render () {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Input/>
            </Label>
          </FormGroup>
          <Button/>
        </Form>
      </div>
    )
  }
}

export default RecipeAdd