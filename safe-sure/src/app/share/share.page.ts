import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  lat: number;
  lng: number;
  address: any;

  controleImagem: boolean;
  constructor(
    private http: HttpClient,
    public toastController: ToastController,
    private sms: SMS
  ) { }

  ngOnInit() {
     this.getCurrentLocation();
     console.log(this.controleImagem);
  }

  myFunction() {

     this.controleImagem = true;
   }

   getCurrentLocation() {
     Plugins.Geolocation.getCurrentPosition().then(result => {
       this.lat = result.coords.latitude;
       this.lng = result.coords.longitude;

       // calling getAddress function to decode the address

       this.getAddress(this.lat, this.lng).subscribe(decodedAddress => {
         this.address = decodedAddress;
         console.log(this.address);
       });
     });
   }

   private getAddress(lat: number, lan: number) {
     return this.http
       .get<any>(
         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lan}&key=${
           environment.googleMapsAPIKey
         }`
       )
       .pipe(
         map(geoData => {
           if (!geoData || !geoData.results || geoData.results === 0) {
             return null;
           }
           return geoData.results[0].formatted_address;
         })
       );
   }

   async presentToast() {
     const toast = await this.toastController.create({
       message: this.address,

       position: 'middle',
       buttons: [
         {
           icon: 'close-circle',
           role: 'cancel'
         }
       ]
     });
     toast.present();
   }

   onMarkerClick() {
     this.presentToast();
   }

  sendSms(){
    this.sms.send('416123456', 'Hello world!');
  }

}
