import { Injectable } from '@angular/core';
import { Alert, AlertType } from '../components/alert/alert.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private subject = new BehaviorSubject<Alert | null>(null);
  private defaultId = 'default-alert';

  success(message: string, options?: any) {
    this.alert(new Alert({ ...options, alertType: AlertType.SUCCESS, message }));
  }

  error(message: string, options?: any) {
    this.alert(new Alert({ ...options, alertType: AlertType.ERROR, message }));
  }

  private alert(alert: Alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }
}
