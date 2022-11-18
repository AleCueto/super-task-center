import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home' + ".title", url: '/home', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'persons' + ".title", url: '/persons', icon: 'person' },
    { title: 'tasks' + ".title", url: '/tasks', icon: 'newspaper' },
    { title: 'assignment' + ".title", url: '/assignments', icon: 'id-card' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [/*'Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'*/];
  constructor(
    private translate:TranslateService
  ) {
    this.translate.setDefaultLang('en');
      
  }


  changeLanguage(lng:string){
    this.translate.setDefaultLang(lng)
  }
}
