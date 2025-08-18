import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-navigation-header></app-navigation-header>
      <main class="content-box">
        <router-outlet></router-outlet>
      </main>
      <footer id="footer">
        <div class="footer-container">
          <div class="resources-section floatl">
            <h2>Web Development Tools</h2>
            <ul>
              <li>Microsoft Visual Studio 2022</li>
              <li>Microsoft Visual Studio 2020</li>
              <li>Microsoft SQL Server 2008</li>
              <li>SQL Server Management Studio</li>
              <li>Amazon Web Services</li>
            </ul>
            <div class="clear"></div>
            <a routerLink="/services"><img src="images/readmore-button1.gif" alt="" /></a>
          </div>
          <div class="resources-section floatl">
            <h2>Web Design Tools</h2>
            <ul>
              <li>Adobe Dreamweaver CS4</li>
              <li>Adobe Photoshop CS4</li>
              <li>Adobe Illustrator CS4</li>
              <li>Adobe Flash Professional CS4</li>
            </ul>
            <div class="clear"></div>
            <a routerLink="/services"><img src="images/readmore-button1.gif" alt="" /></a>
          </div>
          <div class="contact-section floatr">
            <h2>Contact Me</h2>
            <p> 
              Richmond, TX 77407 USA<br />
              Phone : 713-501-2824<br />
              Email : <a href="mailto:www.warreng_2006@yahoo.com">&copy;WarrenSite.com</a>
            </p>
          </div>
          <div class="clear"></div>
          <div class="footer-links">
            <ul class="floatl">
              <li><a routerLink="/home">Home</a></li>
              <li>|</li>
              <li><a routerLink="/about">About Me</a></li>
              <li>|</li>
              <li><a routerLink="/portfolio">Portfolio</a></li>
              <li>|</li>
              <li><a routerLink="/services">Services</a></li>
              <li>|</li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
            <div class="clear"></div>
          </div>
        </div>
      </footer>
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet, NavigationHeaderComponent]
})
export class AppComponent {
  title = 'warpotdevsite';
}
