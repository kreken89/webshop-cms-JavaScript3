const { render, screen } = require("@testing-library/react")
import AdminPanel from "../AdminPanel"
import { Provider } from 'react-redux'
import { store } from '../../../store/index.js'
import { BrowserRouter as Router } from 'react-router-dom'

describe('AdminPanel', () => {
  it('should render the correct text in the h2 element', () => {
    render(
    <Provider store={store}>
      <Router >
        <AdminPanel />
      </Router>
    </Provider>)

    const h2Element = screen.getByText("Welcome to the Admin Panel")
    // screen.debug(null, 50000)
    expect(h2Element).toBeInTheDocument()
  })
  it('should render the correct text in the h2 element', () => {
    render(
    <Provider store={store}>
      <Router >
        <AdminPanel />
      </Router>
    </Provider>)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()  

    // screen.debug(null, 50000)
  })
})


