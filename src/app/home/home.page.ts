import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userIndentification: string;

  constructor(
    private storage: Storage,
    public navCtrl: NavController
  ) {
    this.storage.get('user')
      .then((user) => {
        this.userIndentification = user.name;
      })
  }

  logout() {
    this.storage.remove('user');
    this.navCtrl.navigateRoot('/login');
  }

  page_last_incidents() {
    this.navCtrl.navigateRoot('/last-incidents');
  }

  page_report_incident() {
    this.navCtrl.navigateRoot('/report-incident');
  }

  page_report_work() {
    this.navCtrl.navigateRoot('/report-work');
  }

  page_chat(){
    this.navCtrl.navigateRoot('/chat');
  }
}
