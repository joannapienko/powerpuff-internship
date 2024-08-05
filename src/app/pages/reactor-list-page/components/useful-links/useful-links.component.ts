import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-useful-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './useful-links.component.html',
  styleUrl: './useful-links.component.scss',
})
export class UsefulLinksComponent {
  @Input() links: { label: string; href: string }[] | undefined;
}
