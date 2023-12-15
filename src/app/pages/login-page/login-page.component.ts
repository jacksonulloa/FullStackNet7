import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS_AUTH_PAGES, PATH_MAINTENANCES_PAGES, PATH_MY_ACCOUNT_PAGES } from '../../commons/config/path-pages';
import { UserApiService } from 'src/app/commons/services/user/user-api.service';
import { SessionStorageService } from 'src/app/commons/services/local/storage/storage.service';
import { IResponseLogin } from 'src/app/commons/services/user/user-api-model.interface';
import { IDataUser } from 'src/app/commons/models/data-user';
import { KEYS_WEB_STORAGE } from 'src/app/commons/models/enums';
import { ChannelHeaderService } from 'src/app/commons/services/local/channel-header.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

	private readonly _channelHeaderService = inject(ChannelHeaderService);

  private readonly _router = inject(Router);
	private readonly _formBuilder = inject(FormBuilder);
	private readonly _userApiService = inject(UserApiService);
	private _sessionStorageService = inject(SessionStorageService);

  disabledButton = false;


  formGroup = this._formBuilder.nonNullable.group({
		email: ['admin@gmail.com', [Validators.required, Validators.email]],
		password: ['Admin1234*', Validators.required]
	});

  clickLogin(event: Event): void {
    event.preventDefault();
		if (this.formGroup.valid) {
			this.disabledButton = true;
			// const email = this.formGroup.controls.email.value;
			// const password = this.formGroup.controls.password.value;
			const { email, password } = this.formGroup.getRawValue();
      console.log( email, password)

			this._userApiService.login({ userName: email, password }).subscribe({
				next: (response) => {
          console.log('Ingreso',response)
					this._saveDataUserAndRedirect(response);
				},
				error: () => {
					this.disabledButton = false;
				}
			});
		}
	}

  private _saveDataUserAndRedirect(response: IResponseLogin): void {
		const dataUser: IDataUser = {
			token: response.token,
			fullName: response.fullName,
			isAdmin: response.roles[0] === 'Administrator'
		};

		 this._sessionStorageService.setItem(KEYS_WEB_STORAGE.DATA_USER, dataUser);
		 this._redirectUser(dataUser.isAdmin);
	}
  private _redirectUser(isAdmin: boolean): void {
		const url = isAdmin ? PATH_MAINTENANCES_PAGES.genero.withSlash : PATH_MY_ACCOUNT_PAGES.withSlash;
		this._router.navigateByUrl(url);
		this._channelHeaderService.showUser(true);
	}
}
