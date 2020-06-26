import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'example-component',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})

export class ExampleComponent implements OnInit {
  currentNumber: number;
  biodataList: any[] = [];
  biodataForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.currentNumber = 0;
    this.initBiodataList();
    this.initBiodataForm();
  }

  initBiodataList = () => {
    this.biodataList = [
      { name: 'John', age: 24, gender: 'Male'},
      { name: 'Sarah', age: 20, gender: 'Female'},
      { name: 'Jane', age: 22, gender: 'Female'}
    ];
  }

  initBiodataForm = () => {
    this.biodataForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      gender: new FormControl()
    });
  }

  addNumber = () => {
    this.currentNumber++;
  }

  subtractNumber = () => {
    this.currentNumber--;
  }

  addBiodata = () => {
    const newBiodata = this.biodataForm.getRawValue();
    this.biodataList.push(newBiodata);
  }

  deleteBiodata = (deletedBiodata) => {
    this.biodataList = this.biodataList.filter((biodata) => {
      return biodata !== deletedBiodata;
    });
  }
}
