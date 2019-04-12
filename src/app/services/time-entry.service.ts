import { Injectable } from '@angular/core';
import {TimeEntry} from '../models/TimeEntry';


@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  timeEntries = [{} as TimeEntry];

  constructor() {
    this.timeEntries = [
      {id: 1, projectId: 1, userId: 1, startTime: '01.10.2016 08:00:00', endTime: '01.10.2016 08:25:00'},
      {id: 2, projectId: 1, userId: 1, startTime: '01.10.2016 08:25:00', endTime: '01.10.2016 08:40:00'},
      {id: 2, projectId: 1, userId: 1, startTime: '01.10.2016 08:40:00', endTime: '01.10.2016 08:55:00'},
    ];
  }

  getTimeEntries() {
    return this.timeEntries;
  }

  addTimeEntry(timeEntry: TimeEntry) {
    this.timeEntries.push(timeEntry);
  }

  deleteTimeEntry(timeEntry: TimeEntry) {
    const index: number = this.timeEntries.indexOf(timeEntry);
    if (index !== -1) {
      this.timeEntries.splice(index, 1);
    }
  }
}
