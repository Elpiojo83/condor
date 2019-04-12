import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: any;
  newProject = {} as Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  addProject(project: Project) {
    project.id = this.projects.length + 1;
    this.projectService.addProject(project);
    this.projects = this.projectService.getProjects();
    this.newProject = {} as Project;
  }

  deleteProject(project: Project) {
    this.projectService.deleteProject(project);
    this.projects = this.projectService.getProjects();
  }

}
