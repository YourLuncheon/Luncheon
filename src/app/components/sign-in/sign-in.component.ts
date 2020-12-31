import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  emailControl: FormControl = new FormControl('', []);
  constructor() { }

  ngOnInit(): void {
  }

  refreshClicked(event: any): void {
    console.log("Refresh clicked")
  }

  loveClicked(event: any): void {
    console.log("Love clicked")
  }

  completeMealClicked(event: any): void {
    console.log("completeMeal clicked")
  }

}
