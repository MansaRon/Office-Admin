import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref, get, child } from "firebase/database";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  avator_1: string = 'assets\\MaskGroup_1.png';
  avator_2: string = 'assets\\MaskGroup_2.png';
  avator_3: string = 'assets\\MaskGroup_3.png';
  avator_4: string = 'assets\\MaskGroup_4.png';
  avator_5: string = 'assets\\MaskGroup_5.png';
  avator_6: string = 'assets\\MaskGroup_6.png';
  avator_7: string = 'assets\\MaskGroup.png';

  // officeData: any = [
  //   {
  //     companyName: "TestA",
  //     numOfficePeople: [
  //       {
  //         name: "Thendo",
  //         surname: "Ramashia",
  //         avator: this.avator_1
  //       }
  //     ],
  //     officeNumber: "0853605000",
  //     officeEmail: "info@specno.com",
  //     officeCapacity: 25,
  //     officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
  //   },
  //   {
  //     companyName: "Test Company B",
  //     numOfficePeople: [
  //       {
  //         name: "Thendo",
  //         surname: "Ramashia",
  //         avator: this.avator_1
  //       },
  //       {
  //         name: "Ronny",
  //         surname: "Ramashia",
  //         avator: this.avator_2
  //       },
  //       {
  //         name: "Khano",
  //         surname: "Ramukumba",
  //         avator: this.avator_3
  //       }
  //     ],
  //     officeNumber: "0614806500",
  //     officeEmail: "info@specno.com",
  //     officeCapacity: 2,
  //     officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
  //   },
  //   {
  //     companyName: "Test Company C",
  //     numOfficePeople: [
  //       {
  //         name: "Wayne",
  //         surname: "Rooney",
  //         avator: this.avator_5
  //       },
  //       {
  //         name: "Carlos",
  //         surname: "Tevez",
  //         avator: this.avator_6
  //       },
  //       {
  //         name: "Cristiano",
  //         surname: "Ronaldo",
  //         avator: this.avator_7
  //       }
  //     ],
  //     officeNumber: "0736007050",
  //     officeEmail: "info@specno.com",
  //     officeCapacity: 7,
  //     officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
  //   },
  //   {
  //     companyName: "Test Company D",
  //     numOfficePeople: [
  //       {
  //         name: "Lionel",
  //         surname: "Messi",
  //         avator: this.avator_2
  //       },
  //       {
  //         name: "Andreas",
  //         surname: "Iniesta",
  //         avator: this.avator_3
  //       },
  //       {
  //         name: "Xavi",
  //         surname: "Hernandez",
  //         avator: this.avator_4
  //       },
  //       {
  //         name: "Sergio",
  //         surname: "Busquets",
  //         avator: this.avator_5
  //       }
  //     ],
  //     officeNumber: "0817208090",
  //     officeEmail: "info@specno.com",
  //     officeCapacity: 16,
  //     officeAddress: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
  //   }
  // ]

  officeData = [];
  numOfficePeople = [];
  arrow: boolean = false;
  loader: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {

    // const starCountRef = ref(db, 'offices');
    // onValue(starCountRef, (snapshot) => {
    // let data = snapshot.val();
    // console.log(data);
    // this.officeData = data;
    // console.log(this.officeData);
    // });

    // const dbRef = ref(getDatabase());
    // get(child(dbRef, 'offices/')).then((snapshot) => {
    // if (snapshot.exists()) {
    //   console.log(snapshot.val());
    // } else {
    //   console.log("No data available");
    // }}).catch((error) => {
    //   console.error(error);
    // });
    this.retrieveOffices();
  }

  public retrieveOffices() {
    this.loader = true;
    this.http.get('https://lekker-code-db-default-rtdb.firebaseio.com/offices.json').
    pipe(map(responseMap => {
      const officeArray = [];
       for (const key in responseMap) {
         if (responseMap.hasOwnProperty(key)) {
           officeArray.push({...responseMap[key], id: key});
         }
       }
       return officeArray;
    })).subscribe(response => { this.loader = false; this.officeData = response; console.log(this.officeData); }, error => { this.loader = false; console.log(error); })

  }


  public dropDownClicked() {
    if (!this.arrow) {
      this.arrow = true;
    }
    else {
      this.arrow = false;
    }
  }

  public viewOffice(data) {
    localStorage.setItem("officeData", JSON.stringify(data));
    this.router.navigateByUrl('/view-offices');
  }

  public editOffice(officeDetails) {
    localStorage.setItem("officeData", JSON.stringify(officeDetails));
    this.router.navigateByUrl('/edit-office');
  }

  public createNewOffice() {
    this.router.navigateByUrl('/new-office');
  }

}
