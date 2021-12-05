import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit {

  officeName: string = '';
  officeAddress: string = '';
  officeEmail: string = '';
  officeNumber: string = '';
  maximumCapacity: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public addOffice() {

  }

}
