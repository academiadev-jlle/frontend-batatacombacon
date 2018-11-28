import { Component, OnInit } from '@angular/core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithubSquare;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goGitWiki(){
    // this.window.location.href = 'https://github.com/academiadev-jlle/wiki-batatacombacon/blob/master/Documentation/Frontend.md';
    console.log('oi');
    // this.router.navigate(['https://github.com/academiadev-jlle/wiki-batatacombacon/blob/master/Documentation/Frontend.md']);
    
  }
}
