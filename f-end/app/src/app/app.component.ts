
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
standalone:true
})
export class AppComponent implements OnInit{
title(title: any) {
  throw new Error('Method not implemented.');
}
results: any[]=[];
// Inject HttpClient into your component or service.
constructor(private http: HttpClient) {}

ngOnInit(): void {
// Make the HTTP request:
this.http.get('https://3000-costarelli-costverifica-yqznqds8bqh.ws-eu116.gitpod.io/').subscribe((data: any) => {
// Read the result field from the JSON response.
console.log(data);
this.results = data.results;
console.log(typeof this.results);
}); }
}