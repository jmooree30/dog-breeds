import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
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
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    const headers = new HttpHeaders()
    .set("x-apikey", "5b2af49746624c7b2444501c")
    .set("Content-Type", "application/json")
    .set('cache-control', 'no-cache');
    
    return this.http
      .get<any[]>(this.restItemsUrl,{headers})
      .pipe(map(data => data));
  }

}
