import * as React from 'react';
import Project from './Project';

interface IProjectsState {
    projects: string[];
}

class Projects extends React.Component<{}, IProjectsState> {
    state = {
        projects: [
            'project 1',
            'project 2',
            'project 3'
        ]
    }

    render() {
        const { projects } = this.state;
        return (
            <div>
                {
                    projects.map((project) => <Project project={project} />)
                }
            </div>
        )
    }
}

export default Projects;