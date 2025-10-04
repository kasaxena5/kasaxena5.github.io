import { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        About Page
      </div>
    );
  }
}

// Get data from both reducers
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
