import { Component } from 'react';
import { connect } from 'react-redux';
import ExperienceCard from '../../Common/ExperienceCard.jsx';

class Experience extends Component {
  render() {
    return (
      <div>
        <ExperienceCard
          title="Software Engineer"
          company="Microsoft Exchange Admin Center"
          summary="Project Description"
        />
        <ExperienceCard
          title="Software Engineer"
          company="Microsoft Unified Tenant Configuration Management"
          summary="Project Description"
        />
        <ExperienceCard
          title="Software Engineer"
          company="Microsoft Cmdlet Infra Modernization"
          summary="Project Description"
        />
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
