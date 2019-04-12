import { Injectable } from '@angular/core';
import {Project} from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = [{} as Project];

  constructor() {
    this.projects = [
      {id: 1, name: 'Pegasus', description: 'some text'},
      {id: 2, name: 'Roter Oktober', description: 'some text'},
      {id: 3, name: 'Mickey Mouse', description: 'some text'},
      {id: 4, name: 'Kasparov', description: 'some text'}
      ];
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  deleteProject(project: Project) {
    const index: number = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

}
