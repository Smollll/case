import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notifications: { label: string, value: number | string, time: string, date: string }[] = [];

  constructor() {
    setInterval(() => {
      this.notifs();
    }, 2000);
  }

  notifs() {
    const currentDate = new Date();

    const contentOptions = ['Received Points', 'Received Money', 'Redeemed Points'];
    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];

    let newData: { label: string, value: number | string, time: string, date: string };

    if (randomContent === 'Received Points') {
      const points = Math.floor(Math.random() * 50) + 1;
      newData = {
        label: 'Received Points',
        value: ' + '  +points,
        time: currentDate.toLocaleTimeString(),
        date: currentDate.toLocaleDateString()
      };
    } else if (randomContent === 'Received Money') {
      const money = Math.floor(Math.random() * 10000) + 1;
      newData = {
        label: 'Received Money',
        value: ' ₱ ' + money,
        time: currentDate.toLocaleTimeString(),
        date: currentDate.toLocaleDateString()
      };
    } else {
      const points = Math.floor(Math.random() * 20) + 1;
      newData = {
        label: 'Redeemed Points',
        value: ' - ' +points,
        time: currentDate.toLocaleTimeString(),
        date: currentDate.toLocaleDateString()
      };
    }

    this.notifications.unshift(newData);
  }
}
