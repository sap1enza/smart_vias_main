import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-report-incident',
  templateUrl: './report-incident.page.html',
  styleUrls: ['./report-incident.page.scss'],
})
export class ReportIncidentPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  page_home(){
    this.navCtrl.navigateRoot('/home');
  }
}
