import React, { Component } from 'react';
import CardList from '../components/cardlist';
import Box from '../components/box';
import './app.css'
import ErrorBoundary from '../components/errorboundary'
import Scroll from '../components/scroll';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
})

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(x => x.name.toLowerCase()
      .includes(searchField.toLowerCase()));
    return isPending ? <h1>Loading..</h1> : (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <Box searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);