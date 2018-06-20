import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  restItems: any;
  restItemsUrl = 'https://breeds-a648.restdb.io/rest/dogs  ';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    const headers = new HttpHeaders()
    .set("x-apikey", "5b29e3da46624c7b24444fd8")
    .set("Content-Type", "application/json")
    .set('cache-control': 'no-cache');
    
    return this.http
      .get<any[]>(this.restItemsUrl,{headers})
      .pipe(map(data => data));
  }
}

