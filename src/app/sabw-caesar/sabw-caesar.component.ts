import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sabw-caesar',
  templateUrl: './sabw-caesar.component.html',
  styleUrls: ['./sabw-caesar.component.css']
})
export class SabwCaesarComponent implements OnInit {
 Zahl = 12;
 rotation='rotate(318.5deg)';

 dreheScheibe() {
   console.log("Hallo!");
 }

  constructor() { }

  ngOnInit() {
  }

}