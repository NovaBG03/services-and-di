export class LoggingService {
  logUpdatedStatus(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
