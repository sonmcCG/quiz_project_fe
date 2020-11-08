import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
  teamId: Number;
  branchId: Number;
  constructor() { }
 
  ngOnInit(): void {
    /* this.userService.get(this.teamId, this.branchId)
       .then(res => {
         if (SUCCESS_STATUS == res['status']) {
           this.employees = res['data'];
         }
       }).catch(e => {
         window.alert('Connection Error !');
       }) */
       this.employees = [
         {
           id:1,
           userName: "Kiều Anh",
           email: "kieuanh@gmail.com",
           dob: "29/12/2020",
           phoneNumber: "0983883686",
           address: "Hà nội"
         }
       ]
   }
 
   save = () => {
    //  this.userService.create(this.employee)
    //    .then(res => {
    //      this.toastr.success('Success', '');
    //      if (res['status'] == SUCCESS_STATUS) {
    //        this.employees.push(res['data']);
    //        this.modalCreate.hide();
    //      }
    //    }).catch(e => {
    //      window.alert('Connection Error !');
    //    })
   }
   openModalCreate = () => {
     this.employee = {
       userName: "",
       email: "",
       dob: "",
       phoneNumber: "",
       address: "",
       gender: 1,
       isActive: true,
       branchId: this.branchId
     };
     this.modalCreate.show();
   }
   deactive = (id) => {
    //  this.userService.deactive(id)
    //    .then(res => {
    //      if (res['status'] == SUCCESS_STATUS) {
    //        this.toastr.success('Success', '');
    //        for (let index = 0; index < this.employees.length; index++) {
    //          if (this.employees[index].employeeId == id) {
    //            this.employees.splice(index, 1);
    //          }
    //        }
    //      }
    //    }).catch(e => {
    //      window.alert('Connection Error !');
    //    })
   }
   onItemChange = (value) => {
     this.employee["gender"] = value;
   }
}
