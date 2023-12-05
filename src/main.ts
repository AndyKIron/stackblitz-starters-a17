import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {WrapperComponent} from "./wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

bootstrapApplication(AppComponent).catch((err) => console.error(err));
