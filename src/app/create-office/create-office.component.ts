import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, set, push } from "firebase/database";
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

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  public goBack() {
    this.router.navigateByUrl('/');
  }

  public addOffice() {
    const db = getDatabase();
    const timestamp = new Date().valueOf();

    let office = { officeName: this.officeName, officeAddress: this.officeAddress,
      officeEmail: this.officeEmail, officeNumber: this.officeNumber,
      maximumCapacity: this.maximumCapacity, officeColor: this.officeColor,
      numOfficePeople: this.numOfficePeople}

    // const postListRef = ref(db, 'offices');
    // const newPostRef = push(postListRef);
    // set(newPostRef, {
    //   officeName: this.officeName,
    //   officeAddress: this.officeAddress,
    //   officeEmail: this.officeEmail,
    //   officeNumber: this.officeNumber,
    //   maximumCapacity: this.maximumCapacity,
    //   officeColor: this.officeColor,
    //   numOfficePeople: this.numOfficePeople}).catch((error) => {console.log(error)}).finally(() => {
    //     console.log('Success');
    //     this.officeAddedMsg = 'Office details successfully added';
    //     this.officeName = '';
    //     this.officeAddress = '';
    //     this.officeEmail = '';
    //     this.officeNumber = '';
    //     this.maximumCapacity = null;
    //     this.officeColor = '';
    //     this.timer();
    //   });

    // let obj = ref(db, 'offices/' + timestamp);
    // set(obj, { officeName: this.officeName, officeAddress: this.officeAddress,
    //   officeEmail: this.officeEmail, officeNumber: this.officeNumber,
    //   maximumCapacity: this.maximumCapacity, officeColor: this.officeColor,
    //   numOfficePeople: this.numOfficePeople}).catch((error) => {console.log(error)}).finally(() => {
    //   console.log('Success');
    //   this.officeAddedMsg = 'Office details successfully added';
    //   this.officeName = '';
    //   this.officeAddress = '';
    //   this.officeEmail = '';
    //   this.officeNumber = '';
    //   this.maximumCapacity = null;
    //   this.officeColor = '';
    //   this.timer();
    // });

    this.http.post('https://lekker-code-db-default-rtdb.firebaseio.com/offices.json', office).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Finally');
      this.officeAddedMsg = 'Office details successfully added';
      this.officeName = '';
      this.officeAddress = '';
      this.officeEmail = '';
      this.officeNumber = '';
      this.maximumCapacity = '';
      this.officeColor = '';
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
