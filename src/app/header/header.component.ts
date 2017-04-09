import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() feature = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(item: string) {
    this.feature.emit(item);
  }

}
