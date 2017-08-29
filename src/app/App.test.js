import React from 'react';
import App from './App';

import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import { render } from 'enzyme'


describe('AppComponent Tests', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />)).toBeTruthy()
  })

  it('Adds correctly', () => {
    const app = shallow(<App/>)
    expect(app.instance().add(1, 3)).toEqual(4)
  })

  //unit test
  it('calls the parent when called', () => {
    const spy = jest.fn()
    const app = shallow(<App onButtonClick={spy} />)

    app.instance().handleClick()

    expect(spy.mock.calls.length).toBe(1)
  })

  //integration test
  it('calls the parent when the button is clicked', () => {
    const spy = jest.fn()
    const app = shallow(<App onButtonClick={spy}/>)
    const button = app.find('button')

    expect(button).toBeTruthy()

    button.simulate('click')

    expect(spy.mock.calls.length).toBe(1)
  })
});

