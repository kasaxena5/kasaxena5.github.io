import { Component } from 'react';
import { connect } from 'react-redux';
import ProjectCard from '../../Common/ProjectCard';

class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectCard
          title="Software Engineer"
          company="Microsoft Exchange Admin Center"
          summary="Project Description"
        />
        <ProjectCard
          title="Software Engineer"
          company="Microsoft Unified Tenant Configuration Management"
          summary="Project Description"
        />
        <ProjectCard
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
