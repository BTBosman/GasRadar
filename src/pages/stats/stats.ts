import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  gas;
  info;
  keyFuel = "ngP2le200gg1yghWBVytHGH8Qm4IAoc3"
  constructor(public http: HttpClient,public database:DatabaseProvider,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    this.checkApi();
    console.log('ionViewDidLoad StatsPage');
    this.apiKey();
    
  }
  checkApi(){
    this.database.apiKey().then((data:any)=>{
      console.log(data);
      this.gas = data.quotes[0];
      console.log(this.gas);        
    })
  }


  apiKey(){
    
    let key4 = "https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=d5a431507fe7490dbfc5d23817c24a52"
    let key3 = "http://devapi.mygasfeed.com/stations/radius/-26.2637103/27.97893709999994/5m/diesel/Distance/rfej9napna.json?callback=?"
    let ApiKey2 = "ngP2le200gg1yghWBVytHGH8Qm4IAoc3";
     let keys = "https://api.fuelsa.co.za/exapi/fuel/current/keyFuel"
    let key  = "http://www.apilayer.net/api/live?access_key=0d2ab54aa940e5b82dc37bb63cb3db36&currencies=USD,GBP,ARS,ZAR&format=1";
    return new Promise((accpt,rej)=>{
      this.http.get(keys).subscribe(data=>{
        console.log(data)
      // this.info = data;
      // console.log(this.info);
      // this.gas = this.info.articles[0]
      // console.log(this.gas)
      })
    })
  }

  
}
