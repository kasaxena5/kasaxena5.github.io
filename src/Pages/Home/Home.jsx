import { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div>
        <h1>My Class-Based React + Redux App</h1>
        <p>Redux Count: {this.props.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <hr />
      </div>
    );
  }
}

// Get data from both reducers
const mapStateToProps = (state) => ({
  count: state.home.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
