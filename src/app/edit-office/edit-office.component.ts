import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, set, push, remove } from "firebase/database";
import { HttpClient } from '@angular/common/http';

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
  officeColor: string = '';
  officeData: any;
  counter: number = 1;
  publicTimer: any;
  officeId: string = '';
  officeAddedMsg: string = '';

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

  constructor(private router: Router) { }

  ngOnInit() {
    this.officeData = JSON.parse(localStorage.getItem("officeData"));
    this.officeId = this.officeData.id;
    this.officeName = this.officeData.officeName;
    this.officeAddress = this.officeData.officeAddress;
    this.officeEmail = this.officeData.officeEmail;
    this.officeNumber = this.officeData.officeNumber;
    this.maximumCapacity = this.officeData.maximumCapacity;
  }

  public goBack() {
    this.router.navigateByUrl('/');
  }

  editOffice() {
    const db = getDatabase();
    let obj = ref(db, 'offices/' + this.officeId);
    set(obj, { officeName: this.officeName, officeAddress: this.officeAddress,
      officeEmail: this.officeEmail, officeNumber: this.officeNumber,
      maximumCapacity: this.maximumCapacity, officeColor: this.officeColor
      }).catch((error) => {console.log(error)}).finally(() => {
      this.officeAddedMsg = 'Office details successfully added';
      this.officeName = '';
      this.officeAddress = '';
      this.officeEmail = '';
      this.officeNumber = '';
      this.maximumCapacity = null;
      this.officeColor = '';
      this.timer();
    });
  }

  deleteOffice() {
    const db = getDatabase();
    let obj = ref(db, 'offices/' + this.officeId);
    remove(obj).then(() => {
      console.log('Removed successfully');
      this.timer();
    })
    .catch((error) => {
      error
    });
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
