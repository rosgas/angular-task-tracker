import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAlert: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text || !this.day) {
      this.showAlert = true;
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // @todo - emit event

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.showAlert = false;
  }
}
