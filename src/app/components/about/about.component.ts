import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  template: `
    <div class="main-content">
      <h1>Warpotdevsite Information</h1>
      
      <div style="padding:10px 0 10px 0">
        <div>
          <p>
            First and foremost, warpotdevsite.com is not a company or business. The intentions of this website is to display my technical skills for potential employers and clients so that I may enter the information technology field and to also be more competitive with my job search for this line of work for a company or business.
          </p>
          <br />
          <p>
            My name is Warren Potter. I graduated from the University of Houston - Main Campus with a Bachelor's of Science in Computer Information Systems in May 2010. Currently, I am seeking employment into the IT field. In addition, I also successfully completed a Web Design course during my college education which gives me the edge to create professional, appealing websites. Most of my actual IT work experience is in web development, so that is one path of information technology I would definitely be interested in pursuing as a career. However, I would gladly take any job role in the technical field which may lead to a promising career and a great learning opportunity as well. I have three months of experience as a web developer at the Houston Chronicle and have five months of experience from a software firm called Liquid Development. Now, I am currently employed with Hitachi Consulting since November 2012 working as a Support Consultant (please refer to the project experience for details) and looking for other opportunities as a web developer for growth.
          </p>
          <br />
          <p>Thanks for taking the time to read!</p>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {}
