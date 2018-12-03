import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
  }

  goGitWiki() {
    window.location.href = 'https://github.com/academiadev-jlle/wiki-batatacombacon/blob/master/Documentation/Frontend.md';
  }
}
