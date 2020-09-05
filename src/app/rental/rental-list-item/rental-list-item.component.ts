import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ib-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.css']
})
export class RentalListItemComponent implements OnInit {

  @Input() currentRental: any;

  constructor() { }

  ngOnInit(): void {
  }

}
