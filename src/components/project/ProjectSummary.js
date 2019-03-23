import React from 'react';
import { withRouter } from 'react-router-dom'
import moment from 'moment'

function ProjectSummary({ project, history }) {
  return (
    <div onClick={() => history.push('/project/' + project.id)} className="card z-depth-0 project-summary">
      <div className="card-content gery-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt).calendar()}</p>
      </div>
    </div>
  )
}

export default withRouter(ProjectSummary)