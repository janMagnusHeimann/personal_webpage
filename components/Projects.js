import { workExperience } from '../data/workExperience';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workExperience.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}