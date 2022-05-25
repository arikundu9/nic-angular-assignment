import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface state {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entryForm!: FormGroup; //bang eliminate and test
  title = 'nic-angular-assignment';
  showFiller = false;

  btnText: string = "Submit";
  statesDb: any[] = [{  "name":"West Bengal",
                        "dists":    [
                                    { "name":"Bankura", "cities": ["Bankura", "Bishnupur", "Sonamukhi", "Khatra"] },
                                    { "name":"Purulia", "cities": ["Purulia", "Raghunathpur", "Surulia"] }
                                    ] },
                    {   "name":"Bihar",
                        "dists":    [
                                    { "name":"Patna", "cities": ["Bhojpur", "Buxar", "Kaimur", "Patna", "Rohtas", "Nalanda"]},
                                    { "name":"Saran", "cities": [	"Saran", "Siwan" , "Gopalganj"]}
                                  ] }

                  ];
  distAry:any[] = [];
  cityAry:any[] = [];

  states:any[] = ["West Bengal","Bihar"];
  dists:any[] = [
    ["Bankura","Purulia"],
    ["Patna","Saran"]
  ]
  cities:any[] = [
    [
      ["Bankura", "Bishnupur", "Sonamukhi", "Khatra"],
      ["Purulia", "Raghunathpur", "Surulia"]
    ],
    [
      ["Bhojpur", "Buxar", "Kaimur", "Patna", "Rohtas", "Nalanda"],
      [	"Saran", "Siwan" , "Gopalganj"]
    ]
  ]

  selectedState:any;
  selectedDist:any;


  /* pname: any;
  state: any;
  district:any;
  city:any;
  age:any;
  gender:any; */

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      pname: [''],
      state: [''],
      district: [''],
      pin: [''],
      gender: [''],
      city: [''],
      designation:[''],
    });
  }

  readForm() {
    console.log('Name:' + this.entryForm.controls.state.value);

  }

  getFirstKey(x:any){
    var firstKey = Object.keys(x)[0];
   return  x[firstKey ];
  }

  onStatesChange(e:any){
    let s_i = this.entryForm.controls.state.value;
    this.distAry = this.statesDb[s_i]['dists'];
  }
}
