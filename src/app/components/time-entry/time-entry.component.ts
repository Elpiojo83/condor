import { Component, OnInit } from '@angular/core';
import {TimeEntry} from '../../models/TimeEntry';
import {TimeEntryService} from '../../services/time-entry.service';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit {

  timeEntries: any;
  newTimeEntry = {} as TimeEntry;

  constructor(private timeEntryService: TimeEntryService) {}

  ngOnInit() {
    this.timeEntries = this.timeEntryService.getTimeEntries();
  }

  addTimeEntry(timeEntry: TimeEntry) {
    timeEntry.id = this.timeEntries.length + 1;
    this.timeEntryService.addTimeEntry(timeEntry);
    this.timeEntries = this.timeEntryService.getTimeEntries();
    this.newTimeEntry = {} as TimeEntry;
  }

  deleteTimeEntry(timeEntry: TimeEntry) {
    this.timeEntryService.deleteTimeEntry(timeEntry);
    this.timeEntries = this.timeEntryService.getTimeEntries();
  }

}
