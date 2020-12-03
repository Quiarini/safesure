import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

declare var google: any;

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  map: any;
  marker: any;


  constructor(
    public navCtrl: NavController,
    private nativeGeocoder: NativeGeocoder,
    public geolocation: Geolocation,
    private platform: Platform
  ) { }

  ngOnInit() {

    this.ionView();
  }

  ionView(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  initPage(){
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }

  loadMap(latitude, longitude){

    const latLng = new google.maps.LatLng(latitude, longitude);

    const mapOption = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };

    const element = document.getElementById('map');

    this.map = new google.maps.Map(element, mapOption);

  }
}
