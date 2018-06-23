import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { element } from 'protractor';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {
  restItems: any;
  restItemsUrl = 'https://breeds-a648.restdb.io/rest/dogs';
 
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
      },
       (err) => console.log(err), () => {
         setTimeout(() => {
          let test = document.querySelectorAll('.del');
          test.forEach( (e) => {
            e.addEventListener('click', (element) => {
              this.http.delete('https://breeds-a648.restdb.io/rest/dogs' + '/' + element.target.id, { headers: new HttpHeaders()
              .set("x-apikey", "5b2af49746624c7b2444501c")
              .set("Content-Type", "application/json")
              .set('cache-control', 'no-cache') })
              .subscribe(
                res => {
                  window.location.href = '/index';
                },
                err => {
                  alert("Error occured");
                }
              );
            })
          })
        },1000)
    }
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
