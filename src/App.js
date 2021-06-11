import {Switch, Route, Link} from 'react-router-dom'

// Pages
import Dashboard from "./pages/dashboard/dashboard.page"
import OrdersPage from './pages/orders/orders.page'
import CarsPage from './pages/cars/cars.page'
import UsersPage from './pages/users/users.page'
import UserSeperatePage from './pages/users/users-seperate.page'
import LoginPage from './pages/login/login.page'
// Components
import Header from "./components/header/header.component"

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/login" component={LoginPage} />
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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/cars" component={CarsPage} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/cars" component={CarsPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/users/seperate" component={UserSeperatePage} />
      </div>
        </Switch>
    </div>
  );
}

export default App;
