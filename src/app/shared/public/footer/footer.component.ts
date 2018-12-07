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

  redirectToAsaas() {
    window.location.href = 'https://www.asaas.com';
  }
  redirectToBecomex() {
    window.location.href = 'https://becomex.com.br';
  }
  redirectToContaAzul() {
    window.location.href = 'https://contaazul.com';
  }
  redirectToTreasy() {
    window.location.href = 'https://www.treasy.com.br';
  }
}
