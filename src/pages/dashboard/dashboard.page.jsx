import React, { Component } from 'react';
import './dashboard.styles.css'

// Components
import MiniWidget from '../../components/mini-widget/mini-widget.component';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <MiniWidget />
            </div>
        );
    }
}

export default Dashboard;