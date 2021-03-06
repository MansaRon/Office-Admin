import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  officeColor: string = '';
  maximumCapacity: string = '';
  numOfficePeople: any = [];

  blue: string = 'assets\\blue.png';
  brown: string = 'assets\\brown.png';
  green: string = 'assets\\green.png';
  ocean_blue: string = 'assets\\ocean_blue.png';
  orange: string = 'assets\\orange.png';
  pale_pink: string = 'assets\\pale_pink.png';
  pink: string = 'assets\\pink.png';
  purple: string = 'assets\\purple.png';
  sky_blue: string = 'assets\\sky_blue.png';
  violet: string = 'assets\\violet.png';
  yellow: string = 'assets\\yellow.png';

  officeAddedMsg: string = '';
  counter: number = 1;
  publicTimer: any;
  loader: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public addOffice() {
    this.loader = true;
    let office = { officeName: this.officeName, officeAddress: this.officeAddress,
      officeEmail: this.officeEmail, officeNumber: this.officeNumber,
      maximumCapacity: this.maximumCapacity, officeColor: this.officeColor,
      numOfficePeople: this.numOfficePeople}

    this.http.post('https://lekker-code-db-default-rtdb.firebaseio.com/offices.json', office).subscribe(response => {
    }, error => {}, () => {
      this.officeAddedMsg = 'Office details successfully added';
      this.officeName = '';
      this.officeAddress = '';
      this.officeEmail = '';
      this.officeNumber = '';
      this.maximumCapacity = '';
      this.officeColor = '';
      this.loader = false;
      this.timer();
    })
  }

  public timer(): void {
    this.publicTimer = setInterval(() => {
      if (this.counter <= 0) {
        clearInterval(this.publicTimer);
        this.router.navigateByUrl('/');
      }
      this.counter -= 1;
    }, 1000)
  }

  public palePinkSelected() {
    this.officeColor = this.pale_pink;
  }

  public yellowSelected() {
    this.officeColor = this.yellow;
  }

  public orangeSelected() {
    this.officeColor = this.orange;
  }

  public brownSelected() {
    this.officeColor = this.brown;
  }

  public violetSelected() {
    this.officeColor = this.violet;
  }

  public pinkSelected() {
    this.officeColor = this.pink;
  }

  public oceanBlueSelected() {
    this.officeColor = this.ocean_blue;
  }

  public greenSelected() {
   this.officeColor = this.green;
  }

  public skyBlueSelected() {
    this.officeColor = this.sky_blue;
  }

  public blueSelected() {
    this.officeColor = this.blue;
  }

  public purpleSelected() {
    this.officeColor = this.purple;
  }

}
