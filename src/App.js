import {Switch, Route, Link, Redirect, useLocation} from 'react-router-dom'

// Pages
import Dashboard from "./pages/dashboard/dashboard.page"
import OrdersPage from './pages/orders/orders.page'
import OrdersCreatePage from './pages/orders/order-create-page.page'
import SeperateOrdersPage from './pages/orders/seperate-orders.page'
import CarsPage from './pages/cars/cars.page'
import CarsNewPage from './pages/cars/cars-newform.page'
import CarSeperatePage from './pages/cars/cars-seperate.page'
import UsersPage from './pages/users/users.page'
import UserSeperatePage from './pages/users/users-seperate.page'
import LoginPage from './pages/login/login.page'
// Components
import Header from "./components/header/header.component"

import './App.css';
import { createContext, useContext, useState } from 'react'

function App() {
  const [loggedIn, ChangeLogIn] = useState(false)
  const tobeReturn =
    (<div className="App">
      <div className="sidebar">
        <h1>Superior Rental</h1>
        <div className="sidebar--links">
          <Link to="/">Dashboard</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/users">Users</Link>
        </div>
      </div>
      <div className="content">
        <Header />
      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/cars" component={CarsPage} />
          <Route exact path="/cars/:id" render={(props) => <CarSeperatePage id={props.match.params.id} />} />
          <Route exact path="/cars/create/new" component={CarsNewPage} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/orders/:id" render={(props) => <SeperateOrdersPage id={props.match.params.id} />} />
          <Route exact path="/orders/create/new" component={OrdersCreatePage} />
          <Route exact path="/cars" component={CarsPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/users/:id" render={(props) => <UserSeperatePage id={props.match.params.id} />} />
      </Switch>
      </div>
    </div>)

  let displaay = null
  const currurl = useLocation().pathname
  if (currurl === '/login' && loggedIn.login === false) {
    displaay = <Route exact path="/login" render={(props) => <LoginPage loginState={{loggedIn, ChangeLogIn}} {...props} />} />
  }
  else if (currurl === '/login' && loggedIn.login === false) {
    displaay = <Redirect to="/" />
  }
  else if (loggedIn.login === false) {
    displaay = <Redirect to="/login" />
  }
  else if (currurl === '/logout') {
    console.log(loggedIn)
    ChangeLogIn(false)
    displaay = <Redirect to="/login" />
  }
  else {
    displaay = tobeReturn
  }
  return (
    <div className="beforeApp">
      {
        displaay
      }
    </div>
  );
}

export {App};
