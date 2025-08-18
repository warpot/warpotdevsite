import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  template: `
    <div class="main-content">
      <h1>Contact Me</h1>
      
      <div style="padding:10px 0 10px 0">
        <div>
          <strong>
            If you like the sample work you see throughout this website, then do not hesitate to contact me by email or by phone. (I will not accept any long distance calls. I only accept phone calls within the United States.)
          </strong>
          <br /><br />
          Once again, the purpose of this website is to show my talent and skills to prospective employers and/or recruiters who are in need of a web developer/web designer or any role that pertains to the job duties and responsibilities of an individual who works with web content and websites.
        </div>
        <div>
          <br />
          <h6>Thank you for visiting warpotdevsite.com</h6>
          <br />
          <p><strong>Contact Information:</strong></p>
          <p>
            Richmond, TX 77407 USA<br />
            Phone: 713-501-2824<br />
            Email: <a href="mailto:www.warreng_2006&#64;yahoo.com">www.warreng_2006&#64;yahoo.com</a>
          </p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ContactComponent {}
