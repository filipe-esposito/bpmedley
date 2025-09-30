import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alert, Navbar } from '@bpmedley/shared/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Alert, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
