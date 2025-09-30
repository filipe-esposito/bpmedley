export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export class Alert {
  id = '';
  message = '';
  fade = false;
  alertType = AlertType.INFO;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
