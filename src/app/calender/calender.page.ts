import { Component, OnInit } from '@angular/core';
import { CalendarOriginal } from '@ionic-native/calendar';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  calenders = [];
  constructor(public navCtrl: NavController, private calender: CalendarOriginal, private plt:Platform) { 
    this.plt.ready().then(()=>{
      this.calender.listCalendars().then(data => {
      this.calender=data;
      });
    });
  }

  addEvent(cal){
    let date = new Date();
    let options = { calanderId: cal.id, calenderName: cal.name, url:'https://ionicacademy.com', firstReminderMinutes: 15}
    this.calender.createEventInteractivelyWithOptions('My new Event', 'Galway', 'Special note', date, date, options).then(()=>{

    }) ;
  }

  openCal(cal){
    //this.navCtrl.push('CalDetailsPage', {name: cal.name});
  }

  ngOnInit() {
  }

}
