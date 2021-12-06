import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, set, onValue } from "firebase/database";


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
  maximumCapacity: number;
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

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {

  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  // function writeUserData(userId, name, email, imageUrl) {
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }

  public addOffice() {
    const db = getDatabase();
    let officeObj = {
      officeName: this.officeName,
      officeAddress: this.officeAddress,
      officeEmail: this.officeEmail,
      officeNumber: this.officeNumber,
      maximumCapacity: this.maximumCapacity,
      officeColor: this.officeColor,
      numOfficePeople: this.numOfficePeople
    }
    console.log(officeObj);
    set(ref(db, 'offices/'), {officeObj});

    // this.http.post('https://lekker-code-db-default-rtdb.firebaseio.com/offices.json', officeObj).subscribe(
    //   response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error);
    //   }, () => {
    //     this.officeName = '';
    //     this.officeAddress = '';
    //     this.officeEmail = '';
    //     this.officeNumber = '';
    //     this.maximumCapacity = null;
    //     this.officeColor = '';
    //   }
    // )

  }

  public palePinkSelected(event) {
    this.pale_pink = event.target.currentSrc;
    this.officeColor = this.pale_pink;
  }

  public yellowSelected(event) {
    this.yellow = event.target.currentSrc;
    this.officeColor = this.yellow;
  }

  public orangeSelected(event) {
    this.orange = event.target.currentSrc;
    this.officeColor = this.orange;
  }

  public brownSelected(event) {
    this.brown = event.target.currentSrc;
    this.officeColor = this.brown;
  }

  public violetSelected(event) {
    this.violet = event.target.currentSrc;
    this.officeColor = this.violet;
  }

  public pinkSelected(event) {
    this.pink = event.target.currentSrc;
    this.officeColor = this.pink;
  }

  public oceanBlueSelected(event) {
    this.ocean_blue = event.target.currentSrc;
    this.officeColor = this.ocean_blue;
  }

  public greenSelected(event) {
    this.green = event.target.currentSrc;
    this.officeColor = this.green;
  }

  public skyBlueSelected(event) {
    this.sky_blue = event.target.currentSrc;
    this.officeColor = this.sky_blue;
  }

  public blueSelected(event) {
    this.blue = event.target.currentSrc;
    this.officeColor = this.blue;
  }

  public purpleSelected(event) {
    this.purple = event.target.currentSrc;
    this.officeColor = this.purple;
  }

}
