import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
>>>>>>> c6a2435d670cccd5923976547f237a3d462fde5c
import { NgForm } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  action: string;

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider, private toastCtrl: ToastController, private alertCtrl: AlertController) {
=======
  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider, private toastCtrl: ToastController) {
>>>>>>> c6a2435d670cccd5923976547f237a3d462fde5c
    this.action = 'registration';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(form: NgForm){
    this.database.registerUser(form.form.value.name, form.form.value.email, form.form.value.password).then(
      (data)=>{
        const toast = this.toastCtrl.create({
          message: 'You Have Successfully Been Registered, Please Log In',
          duration: 3000
        });
        toast.present();
        this.action = 'login'
      }
    ).catch(
      (error)=>{
        const toast = this.toastCtrl.create({
          message: 'Uh Oh Something Went Wrong!',
          duration: 3000
        });
        toast.present();
      }
    )
  }

  login(form: NgForm){
<<<<<<< HEAD
    console.log(form);
    this.database.login(form.form.value.email, form.form.value.password).then((data)=>{
      const toast = this.toastCtrl.create({
        message: 'You Have Successfully Logged In!',
        duration: 3000
      });
      toast.present();

      this.navCtrl.setRoot('TabsPage');
    })
  }

  resetPassword(email:string){
    const alert =this.alertCtrl.create({
      title: 'Reset Password',
      message: "Enter You Email Address So That You Can Recieve Your Password Reset Email",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons:[
        {
          text: 'Ok',
          handler: data =>{
            console.log(data.email);
            this.database.resetPassword(data.email).then(data=>{
              const toast = this.toastCtrl.create({
                message: `An E-mail Has Been Sent To reset Your Password`,
                duration: 3000
              });
              toast.present();
            })
          }
        }
      ]
    });
    alert.present();
=======
    console.log(form)
    this.database.login(form.form.value.email,form.form.value.password).then(
      (data)=>{
        const toast = this.toastCtrl.create({
          message: 'Welcome',
          duration: 3000
        });
        toast.present();
        this.action = 'TabsPage'
      }
    ).catch(
      (error)=>{
        const toast = this.toastCtrl.create({
          message: 'Uh Oh Something Went Wrong!',
          duration: 3000
        });
        toast.present();
      }
    )
  }

  resetPassword(email:string){
>>>>>>> c6a2435d670cccd5923976547f237a3d462fde5c
    
  }

}
