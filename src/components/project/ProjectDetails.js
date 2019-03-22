import React from 'react'

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sunt molestias repellendus alias, ut quis at. Ea enim ex repudiandae.</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The Sonik</div>
            <div>2nd March, 2am</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
