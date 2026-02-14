import { Component } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { Injectable } from "@angular/core";
@Component({
  selector: 'app-notification',
  standalone: true,  
  templateUrl: './notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationComponent{}


@Injectable({ providedIn: "root" })
export class NotificationService {
  private hubConnection!: signalR.HubConnection;

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:5001/notificationsHub")
      .build();

    this.hubConnection
      .start()
      .then(() => console.log("✅ SignalR connected"))
      .catch(err => console.error("❌ SignalR error: ", err));

    this.hubConnection.on("ReceiveNotification", (message) => {
      console.log("🔔 Notification:", message);
      alert(message);
    });
  }
}
