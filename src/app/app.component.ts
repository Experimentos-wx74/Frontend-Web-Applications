import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidenavComponent} from "./public/components/sidenav/sidenav.component";
import {HeaderComponent} from "./public/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';
}
