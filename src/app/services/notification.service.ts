import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[] = [];
  constructor() { }
  add(notification: string) {
    this.notifications.push(notification);
  }
  clear() {
    this.notifications = [];
  }
  show(notification: string) {
    this.notifications = [];
    this.notifications.push(notification);
  }
}
