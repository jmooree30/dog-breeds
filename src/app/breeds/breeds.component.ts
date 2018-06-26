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
 
  constructor(private http: HttpClient) {};

  ngOnInit(): void {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(){
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
      },
       (err) => console.log(err), () => {
         setTimeout(() => {
           this.getImages();
           this.deleteBreed();
        },0)
      })
    }

  getImages() {
    let breedName = Array.from(document.querySelectorAll('#breedName'));
    breedName.forEach( (el) => {
      let image = (<HTMLInputElement>document.createElement('IMG'));
      this.http.get(`https://pixabay.com/api/?key=9366467-095b3a062ef718d0e5e763bdf&q=${el.innerHTML}&image_type=photo`)
      .subscribe(
        res => {
          image.src = (<any>res).hits[0].largeImageURL;
          image.width = '100';
          image.height = '100';
          el.appendChild(document.createElement('br'));
          el.appendChild(image);      
        },
        err => {
          alert("Error occured");
        }
      );
    })
  }

  deleteBreed() {
    let deleteLinks = Array.from(document.querySelectorAll('.del'));
    deleteLinks.forEach( (e) => {
      e.addEventListener('click', (element) => {
        this.http.delete('https://breeds-a648.restdb.io/rest/dogs' + '/' + (<any>element.target).id, { headers: new HttpHeaders()
        .set("x-apikey", "5b2af49746624c7b2444501c")
        .set("Content-Type", "application/json")
        .set('cache-control', 'no-cache') })
        .subscribe(
          res => {
          },
          err => {
            alert("Error occured");
          }
        )
        let el = document.getElementById(`${(<any>element.target).id}`);
        el.parentNode.removeChild(el);
      })
    })
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
