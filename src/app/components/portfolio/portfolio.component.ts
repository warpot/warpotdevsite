import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  template: `
    <div class="main-content">
      <h1>Projects</h1>
      
      <div style="padding:10px 0 10px 0">
        <div class="ourprojectrow">
          <h6>Westberry-Engram Sigma Educational Foundation, Inc</h6>
          <div>
            <img src="images/WESEF.jpg" alt="WESEF" width="210" height="139" class="project-img" />
            Westberry-Engram Sigma Educational Foundation, Inc (also abbreviated as WESEF) is a non profit organization of Alpha Beta Sigma Chapter, Phi Beta Sigma Fraternity, Inc. One of the members reached out to me in need a website for the foundation to have an online presence. This organization was founded in 2005 and they continue to serve the community. Please visit the <a href="http://www.wesef2005.org" target="_blank">WESEF</a> website for more information and updates.
            <div class="clear"></div>
          </div>
          <br />
          <div style="font-weight:bold;">
            <img src="images/arrow.png" alt="" width="16" height="16" border="0" style="position: relative; top: 3px;" />
            <a href="http://www.wesef2005.org" target="_blank">View this project</a>
            <div class="clear"></div>
          </div>
        </div>
        
        <div class="ourprojectrow">
          <h6>RJ Christian Store</h6>
          <div>
            <img src="images/rj.jpg" alt="RJ Christian Store" width="210" height="139" class="project-img" />
            RJ Christian Store is an online store that sells religious items such as bibles, books, jewelry, and other accessories. The client requested a website to market their products online and to also have the capability of customers placing orders online. This was accomplished using an e-commerce application.
            <div class="clear"></div>
          </div>
          <br />
          <div style="font-weight:bold;">
            <img src="images/arrow.png" alt="" width="16" height="16" border="0" style="position: relative; top: 3px;" />
            <span>Project completed (site no longer active)</span>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class PortfolioComponent {}
