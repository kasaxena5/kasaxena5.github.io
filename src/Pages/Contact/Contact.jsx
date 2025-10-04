import { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
  render() {
    return (
      <div>
        Contact Page
      </div>
    );
  }
}

// Get data from both reducers
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
