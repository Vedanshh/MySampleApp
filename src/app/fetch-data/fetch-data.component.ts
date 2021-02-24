import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  @ViewChild('userForm', {static: false}) userForm: NgForm;
  url ='https://jsonplaceholder.typicode.com/posts';
  getData = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onFetchData(){
    this.http.get<any>(this.url).subscribe(response => {
      console.log(response)
      // var finaldata = response.data;
      this.getData = response;
      
    });
  }

}
