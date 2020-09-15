import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupS: string = "groups/5f60b39445659d0017a895ae";

  people: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getGroup();
  }

  
  /////// https://xhub-balance-calculator.herokuapp.com/
  
  getGroup(){
    
    this.http.get<any>('https://xhub-balance-calculator.herokuapp.com/' + this.groupS)
    .subscribe(data => {
    
      this.people = data.members;
      console.log(this.people )
  })
  }
  


}
