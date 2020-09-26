export abstract class Notifications {
  notifications: Array<{ message: string }>;

  constructor() {
    this.notifications = Array<{ message: string }>();
  }

  addNotification(message: string): void {
    this.notifications.push({ message: message });
  }

  IsTrue(value: any, message: string) {
    if (value) {
      this.addNotification(message);
    }
  }

  IsRequired(value: any, message: string) {
    if (!value || value.length <= 0) {
      this.addNotification(message);
    }
  }

  hasMinLen(value: string, min: number, message: string) {
    if (!value || value.length < min) {
      this.addNotification(message);
    }
  }

  hasManLen(value: any, max: number, message: string) {
    if (!value || value.length > max) {
      this.addNotification(message);
    }
  }

  hasFixedLen(value: any, len: number, message: string) {
    if (value.length != len) {
      this.addNotification(message);
    }
  }

  isEmail(value:, message: string) {}

  get allNotifications(): Array<{ message: string }> {
    return this.notifications;
  }

  valid(): boolean {
    return this.notifications.length === 0;
  }
}
