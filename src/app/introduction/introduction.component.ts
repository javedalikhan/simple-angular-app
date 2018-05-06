import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.show('This area will show details of the screen which is visible');
    this.notificationService.add('This is the default Route of the app.');
  }
}
