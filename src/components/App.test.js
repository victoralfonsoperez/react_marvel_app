import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { App } from './App'

describe('App', () => {
  const mockGetCharacters = jest.fn()
  const props = { getAllCharacters: mockGetCharacters, ready: false }
  const app = shallow(<App {...props} />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
})
