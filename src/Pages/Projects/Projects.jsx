import { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
  render() {
    return (
      <div>
        Projects Page
      </div>
    );
  }
}

// Get data from both reducers
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
