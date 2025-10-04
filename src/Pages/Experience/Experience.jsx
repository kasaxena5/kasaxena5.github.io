import { Component } from 'react';
import { connect } from 'react-redux';

class Experience extends Component {
  render() {
    return (
      <div>
        Experience Page
      </div>
    );
  }
}

// Get data from both reducers
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
