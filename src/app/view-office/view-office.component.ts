import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
  styleUrls: ['./view-office.component.css']
})
export class ViewOfficeComponent implements OnInit {

  officeData: any;
  arrow: boolean = false;

  staffMemberName: string = '';
  staffMemberSurname: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.officeData = JSON.parse(localStorage.getItem("officeData"));
    console.log(this.officeData);
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public dropDownClicked() {
    if (!this.arrow) {
      this.arrow = true;
    }
    else {
      this.arrow = false;
    }
  }

  public editUser(data) {
    console.log(data);
  }

  public createNewOffice() {
    // this.router.navigateByUrl('/new-office');
  }

}
