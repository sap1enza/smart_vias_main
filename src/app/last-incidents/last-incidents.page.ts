import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-last-incidents',
  templateUrl: './last-incidents.page.html',
  styleUrls: ['./last-incidents.page.scss'],
})
export class LastIncidentsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  page_home(){
    this.navCtrl.navigateRoot('/home');
  }
}
