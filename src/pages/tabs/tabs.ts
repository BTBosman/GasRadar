import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab3Root: string;
  tab2Root: string;
  tab1Root: string;
  logg: string; 
  status;

  constructor(public database: DatabaseProvider,public navCtrl: NavController){
    this.tab1Root = 'MapPage';
    this.tab2Root = 'StatsPage';
    this.tab3Root = 'TipsPage';
    this.logg = 'LoginPage';
  }

  ionviewDidLoad(){
    this.checkLogInState(); 
  }

  ionviewDidEnter(){
    this.ionviewDidLoad()
  }

  checkLogInState(){
    this.database.getUserState().then(data =>{
      if (data == 1 ){
        this.status = true;
        this.database.getuser().then(data2 =>{
          console.log(data2)
          this.navCtrl.setRoot(this.tab1Root)
        })
      }
      else if (data == 0 ){
        this.status = false;
        this.navCtrl.setRoot(this.logg)
      }
    })
  }
}
