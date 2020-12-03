import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-ss',
  templateUrl: './login-ss.component.html',
  styleUrls: ['./login-ss.component.scss'],
})
export class LoginSsComponent implements OnInit {

  lat: number;
  lng: number;
  address: any;

  controleImagem: boolean;

  constructor(
    private http: HttpClient,
    public toastController: ToastController
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

          console.log(geoData);
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

}
