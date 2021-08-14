import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() values: any[] = [];

  @Input() selectedValue: any;

  constructor() {}

  ngOnInit(): void {
  }

}
