import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-report-work',
  templateUrl: './report-work.page.html',
  styleUrls: ['./report-work.page.scss'],
})
export class ReportWorkPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  page_home(){
    this.navCtrl.navigateRoot('/home');
  }
}
