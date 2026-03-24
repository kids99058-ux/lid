import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentYear = new Date().getFullYear();
}
