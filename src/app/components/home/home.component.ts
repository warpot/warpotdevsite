import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="info">
      <h1>Welcome</h1>
      <p>warpotdevsite.com is my personal website I started during my college career at the University of Houston. This is my portfolio to showcase my skills in web development.</p>
      <a routerLink="/about"><img src="images/readmore-button.gif" alt="Read more about me" /></a>
    </div>
    <div class="crousel-col">
      <a href="#" class="left-arrow"><img src="images/left-arrow.gif" alt="Previous" /></a>
      <a routerLink="/portfolio"><img src="images/crousel-img.gif" alt="View Portfolio" /></a>
      <a href="#" class="right-arrow"><img src="images/right-arrow.gif" alt="Next" /></a>
    </div>
    <div class="clear"></div>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {}
