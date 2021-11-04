import { Component, OnInit } from '@angular/core';
import TasksService from '../services/tasks.service';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.css'],
})
export class SubtitleComponent {
  constructor(private tasksServices: TasksService) {}

  get numberTasks() {
    return this.tasksServices.tasks.length;
  }
}
