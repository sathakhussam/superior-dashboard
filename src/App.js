import {Switch, Route, Link, useLocation} from 'react-router-dom'

// Pages
import Dashboard from "./pages/dashboard/dashboard.page"
import OrdersPage from './pages/orders/orders.page'
import SeperateOrdersPage from './pages/orders/seperate-orders.page'
import CarsPage from './pages/cars/cars.page'
import CarSeperatePage from './pages/cars/cars-seperate.page'
import UsersPage from './pages/users/users.page'
import UserSeperatePage from './pages/users/users-seperate.page'
import LoginPage from './pages/login/login.page'
// Components
import Header from "./components/header/header.component"

import './App.css';

function App() {
  return (
    <div className="beforeApp">
      {
        useLocation().pathname == '/login' 
        ?
        <Route exact path="/login" component={LoginPage} />
        :
        <div className="App">
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
            <Route exact path="/cars/seperate" component={CarSeperatePage} />
            <Route exact path="/orders" component={OrdersPage} />
            <Route exact path="/orders/seperate" component={SeperateOrdersPage} />
            <Route exact path="/cars" component={CarsPage} />
            <Route exact path="/users" component={UsersPage} />
            <Route exact path="/users/seperate" component={UserSeperatePage} />
        </Switch>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
