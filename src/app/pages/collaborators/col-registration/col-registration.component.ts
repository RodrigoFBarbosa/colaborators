import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-col-registration',
  templateUrl: './col-registration.component.html',
  styleUrls: ['./col-registration.component.scss']
})
export class ColRegistrationComponent implements OnInit{
  

  title?: string;
  closeBtnName?: string;
  list: string[] = [];
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
 
 
/* This is a component which we pass in modal*/
 

