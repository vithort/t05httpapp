import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: Observable<any>;
  result: any = [];

  constructor(
    public navCtrl: NavController
    , public http: HttpClient
    , private _platform: Platform
  ) {

  }

  getData() {
    var url = 'https://jsonplaceholder.typicode.com/posts/1';

    console.log("Clicked");
    this.data = this.http.get(url);
    this.data.subscribe(data => {
      console.log(data);
      this.result = data;
    })
  }

  postData() {

    if (this._platform.is("cordova")) {
      var url = "http://mikayil.com/json.php?key=value";
    }

    let postData = new FormData();
    postData.append('key', 'value');
    postData.append('username', 'info@mail.com');

    console.log("Clicked");

    this.data = this.http.post(url, postData);
    this.data.subscribe(data => {
      console.log(data);
    })
  }

}
