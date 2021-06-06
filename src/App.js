import {Switch, Route, Link} from 'react-router-dom'

// Pages
import Dashboard from "./pages/dashboard/dashboard.page"

// Components
import Header from "./components/header/header.component"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h1>Superior Rental</h1>
        <div className="sidebar--links">
          <Link to="/">Dashboard</Link>
          <Link to="/">Orders</Link>
          <Link to="/">Cars</Link>
          <Link to="/">Users</Link>
        </div>
      </div>
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
