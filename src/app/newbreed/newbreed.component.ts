import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newbreed',
  templateUrl: './newbreed.component.html',
  styleUrls: ['./newbreed.component.css']
})
export class NewbreedComponent implements OnInit {

  constructor(public http: HttpClient) { }
  ngOnInit() {
  const breed = document.querySelector('#breed');
  const description = document.querySelector('#description');
  const lifespan = document.querySelector('#lifespan');
  const size = document.querySelector('#size');    
  const submit = document.querySelector('#submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    this.http.post('https://breeds-a648.restdb.io/rest/dogs', {
      breed: breed.value,
      description: description.value,
      lifespan: lifespan.value,
      size: size.value,
    }, { headers: new HttpHeaders()
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

  }


}
