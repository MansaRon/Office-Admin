import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { getDatabase, ref, set, push, remove, update, child } from "firebase/database";

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

  staffAddedMsg: string = '';
  staffUpdateMsg: string = '';
  users = [];
  // pictures = [
  //   {
  //     avator: 'assets\\MaskGroup_1.png'
  //   },
  //   {
  //     avator: 'assets\\MaskGroup_2.png'
  //   },
  //   {
  //     avator: 'assets\\MaskGroup_3.png'
  //   },
  //   {
  //     avator: 'assets\\MaskGroup_4.png'
  //   },
  //   {
  //     avator: 'assets\\MaskGroup_5.png'
  //   },
  //   {
  //     avator: 'assets\\MaskGroup_6.png'
  //   },
  //   {
  //     avator: 'assets\\MaskGroup.png'
  //   }
  // ]
  // selectedAvator: string;

  avator_2: string = 'assets\\MaskGroup_2.png';
  avator_3: string = 'assets\\MaskGroup_3.png';
  avator_4: string = 'assets\\MaskGroup_4.png';
  avator_5: string = 'assets\\MaskGroup_5.png';
  avator_6: string = 'assets\\MaskGroup_6.png';
  avator_7: string = 'assets\\MaskGroup.png';

  disableAddingStaff: boolean = false;

  newStaffName: string = '';
  newStaffSurname: string = '';
  userData: any;
  loader: boolean = false;
  filterUsers: string = ''

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.officeData = JSON.parse(localStorage.getItem("officeData"));
    this.getUsers();
    if (this.officeData.maximumCapacity <= this.users.length) {
      this.disableAddingStaff = true;
    }
    else {
      this.disableAddingStaff = false;
    }
  }

  public testChange(filterUsers) {

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

  public editUser(userData) {
    this.userData = userData;
  }

  public updateUserDetails() {
    let updateUser = {
      name: this.newStaffName,
      surname: this.newStaffSurname,
      avator: this.avator_5
    }

    const db = getDatabase();
    let obj = ref(db, 'offices/' + this.officeData.id + '/users.json');
    set(obj, {updateUser}).catch((error) => {}).finally(() => {
      this.staffMemberName = '';
      this.staffMemberSurname = '';
      this.staffUpdateMsg = 'User successfully updated.';
      this.getUsers();
    });

  }

  public addUserToOffice() {

      let newStaffMember = {
        name: this.staffMemberName,
        surname: this.staffMemberSurname,
        avator: this.avator_2
      }
      this.http.post('https://lekker-code-db-default-rtdb.firebaseio.com/offices/' + this.officeData.id + '/users.json', newStaffMember).subscribe(response => {
      }, error => {

      }, () => {
        this.getUsers();
        this.staffMemberName = '';
        this.staffMemberSurname = '';
        this.staffAddedMsg = 'User successfully added into the office';
      });

  }

  public getUsers() {
    this.http.get('https://lekker-code-db-default-rtdb.firebaseio.com/offices/' + this.officeData.id + '/users.json').
    pipe(map(responseMap => {
      const officeArray = [];
       for (const key in responseMap) {
         if (responseMap.hasOwnProperty(key)) {
           officeArray.push({...responseMap[key], id: key});
         }
       }
       return officeArray;
    })).subscribe(response => {
      this.users = response;
    }, error => {

    })
  }

  public deleteUserDetails() {
    const db = getDatabase();
    let obj = ref(db, 'offices/' + this.officeData.id + '/users.json');
    remove(obj).then(() => {

    })
    .catch((error) => {

    });
  }

}
