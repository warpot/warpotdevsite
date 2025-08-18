import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  template: `
    <div class="header">
      <div class="top-links floatl">
        <ul>
          <li><a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About Me</a></li>
          <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>
        <div class="clear"></div>
      </div>
      <div class="search-section floatr">
        <!-- Search section removed as in original -->
      </div>
      <div class="clear"></div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavigationHeaderComponent {}
