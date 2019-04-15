import {Component, OnInit} from '@angular/core';
import {TimeEntry} from '../../models/TimeEntry';
import {TimeEntryService} from '../../services/time-entry.service';
import {User} from '../../models/User';
import {Project} from '../../models/Project';
import {UserService} from '../../services/user.service';
import {ProjectService} from '../../services/project.service';
import {EChartOption} from 'echarts';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  timeValues = [];
  projectNames = [];

  chartOption: EChartOption = {
    xAxis: {
      type: 'category',
      data: this.projectNames
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: this.timeValues,
      type: 'bar'
    }]
  };

  timeEntries: any;
  users = [{} as User];
  projects = [{} as Project];
  newTimeEntry = {} as TimeEntry;


  constructor(private timeEntryService: TimeEntryService,
              private userService: UserService,
              private projectService: ProjectService) {
  }

  ngOnInit() {
    this.timeEntries = this.timeEntryService.getTimeEntries();
    this.getProjects();
    this.getUsers();


    this.timeEntries.forEach(entry => {
      this.timeValues.push(entry.duration);

      const pName = this.projects.filter(project => {
        return project.id === entry.projectId;
      });

      console.log(pName[0].name);

      this.projectNames.push(pName[0].name);
    });


  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  getProjects() {
    this.projects = this.projectService.getProjects();
  }

  addTimeEntry(timeEntry: TimeEntry) {
    timeEntry.id = this.timeEntries.length + 1;

    const from = new Date(timeEntry.startTime);
    const to = new Date(timeEntry.endTime);
    const diff = ((to.getTime() - from.getTime()) / (1000 * 3600)).toFixed(2);
    console.log(diff);

    this.newTimeEntry.duration = diff;

    this.timeEntryService.addTimeEntry(timeEntry);
    this.timeEntries = this.timeEntryService.getTimeEntries();
    this.newTimeEntry = {} as TimeEntry;
  }

  deleteTimeEntry(timeEntry: TimeEntry) {
    this.timeEntryService.deleteTimeEntry(timeEntry);
    this.timeEntries = this.timeEntryService.getTimeEntries();
  }

}
