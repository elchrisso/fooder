import React from 'react';
import LoginForm from './LoginForm'
import { shallow } from 'enzyme'

describe('AuthComponentTests', () => {
  it('renders without crashing', () => {
    expect(shallow(<LoginForm onSubmit={() => { console.log("hello") }}/>)).toBeTruthy()
  })
})