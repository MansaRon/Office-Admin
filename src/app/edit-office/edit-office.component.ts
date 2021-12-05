import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {

  officeName: string = '';
  officeAddress: string = '';
  officeEmail: string = '';
  officeNumber: string = '';
  maximumCapacity: string = '';
  officeData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.officeData = JSON.parse(localStorage.getItem("officeData"));
    console.log(this.officeData);

    this.officeName = this.officeData.companyName;
    this.officeAddress = this.officeData.officeAddress;
    this.officeEmail = this.officeData.officeEmail;
    this.officeNumber = this.officeData.officeNumber;
    this.maximumCapacity = this.officeData.officeCapacity + " Staff Members";
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  editOffice() {

  }

  deleteOffice() {

  }

}
