import { Component } from '@angular/core';
//import { PATHS_AUTH_PAGES } from '../../../../commons/config/path-pages';
import { PATHS_AUTH_PAGES } from '../../../../config/path-pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActiveLink: string = '';
  readonly pathRegister = PATHS_AUTH_PAGES.registerPage.withSlash;
  readonly loginAccess = PATHS_AUTH_PAGES.loginPage.withSlash;
}
