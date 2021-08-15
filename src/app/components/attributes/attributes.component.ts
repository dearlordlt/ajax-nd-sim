import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  attributes = [
    "STRENGTH",
    "CONSTITUTION",
    "DEXTERITY",
    "INTELLIGENCE",
    "CHARISMA",
    "WILLPOWER"
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
