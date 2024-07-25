import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isHome: Observable<boolean> = of(true);

  ngOnInit(): void {
    const currentLocation = window.location.href;
    if (!currentLocation.includes('welcome')) {
      this.isHome = of(false);
    }
  }
}
