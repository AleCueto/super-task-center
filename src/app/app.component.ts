import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Persons', url: '/persons', icon: 'heart' },
    { title: 'Tasks', url: '/tasks', icon: 'archive' },
    { title: 'Assignments', url: '/assignments', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [/*'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'*/];
  constructor() {}
}
