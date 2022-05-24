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
  states: any[] = [{ "West Bengal": [
                                    { "Bankura": ["Bankura", "Bishnupur", "Sonamukhi", "Khatra"] },
                                    { "Purulia": ["Purulia", "Raghunathpur", "Surulia"] }
                                    ] },
                    {"Bihar": [
                                    {},
                                    {}] }

                  ];

  pname: any;
  state: any;
  district: any;
  city: any;
  age: any;
  gender: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      pname: [''],
      state: [''],
      district: [''],
      age: [''],
      gender: [''],
      city: ['']
    });
  }

  readForm() {
    console.log('Name:' + this.entryForm.controls.gender.value);

  }
}
