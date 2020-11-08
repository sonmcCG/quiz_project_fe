import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  employees: any;
  employee: Object = {
    userName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    address: "",
    gender: 1,
    isActive: true
  };
  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        userName: "Kiều Anh",
        email: "kieuanh@gmail.com",
        dob: "29/12/2020",
        phoneNumber: "0983883686",
        address: "Hà nội"
      }
    ]
  }

}
