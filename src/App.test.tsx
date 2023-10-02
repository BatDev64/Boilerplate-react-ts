import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render title screen', () => {
    const sut = render(<App />)
    const titleElemente = sut.getAllByText('Hola mundo')

    expect(titleElemente).toBeInTheDocument()
  })
})
