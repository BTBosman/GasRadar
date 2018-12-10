import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { MediaProvider } from '../../providers/media/media';
declare var firebase;
declare var google;
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  url = `../../assets/imgs/pic24.jpg`;
  pic;
  address2;
  constructor(public toastCtrl: ToastController ,private database: DatabaseProvider, public navCtrl: NavController, public navParams: NavParams, private media: MediaProvider, private loadingCtrl: LoadingController) {
  }

  insertpic(event:any){
    if (event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.onload = (event:any) =>{
       this.pic = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  onAddBusiness(form: NgForm){
    // this.database.registerBusiness
    this.database.GeoBussinessAddress(form.form.value.email,form.form.value.password,form.form.value.name,form.form.value.address,form.form.value.telephone,form.form.value.diesel,form.form.value.p95,form.form.value.p93,form.form.value.gas,form.form.value.business).then((data)=>{
      data = this.address2
      console.log(this.address2)
      let lat = this.address2.lat;
      let lng = this.address2.lng;
      this.database.registerBusiness2(form.form.value.email,form.form.value.password,form.form.value.name,lat,lng,form.form.value.telephone,form.form.value.diesel,form.form.value.p95,form.form.value.p93,form.form.value.gas,form.form.value.business).then((data)=>{
        const toast = this.toastCtrl.create({
          message: 'You Have Successfully Been Registered, Please Log In',
          duration: 3000
        });
        toast.present();
        // this.action = 'login'
      }
    ).catch(
      (error)=>{
        const toast = this.toastCtrl.create({
          message: 'Uh Oh Something Went Wrong!',
          duration: 3000
        });
        toast.present();
        console.log(error);
      }
      
    )}
  )}

}
  

    
    //  let geocoder = new google.maps.Geocoder();
    //   let  userid = firebase.auth().currentUser;
  

    //   geocoder.geocode({'address':form.value.address},function(results, status){
 
  
  
    //     if(status == google.maps.GeocoderStatus.OK){
      
    //      alert(userid);
      
    //       let lati = results[0].geometry.location.lat();
    //      let longi = results[0].geometry.location.lng();
    //      console.log(lati +" "+ longi);
    //   }
    //   }
  

