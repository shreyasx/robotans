import React, { Component } from 'react';
import CardList from '../components/cardlist';
import Box from '../components/box';
import './app.css'
import ErrorBoundary from '../components/errorboundary'
import Scroll from '../components/scroll';
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            search: ''
        }
    }

    onSearchChange = (e) => this.setState({ search: e.target.value });

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json()).then(u => this.setState({ robots: u }))
    }

    render() {
        const { search, robots } = this.state;
        const filteredRobots = robots.filter(x => x.name.toLowerCase()
            .includes(search.toLowerCase()));
        return (robots.length === 0) ? <h1>Loading..</h1> : (
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <Box searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
export default App;