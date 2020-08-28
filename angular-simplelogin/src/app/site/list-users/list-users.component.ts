import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service'

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public userlistarray:any;	
  constructor(private CommonService:CommonService) { }

  ngOnInit(): void {

  	this.CommonService.getUserList().subscribe((result)=>{

  		this.userlistarray = result;
  		console.log(this.userlistarray);

  	});
  }

}
