//#region PATH PROCESOS
const processPage = 'proceso';
const reservePage = 'reservarJuego';
const evaluatePage = 'evaluarJuego';


export const PATHS_PROCESS_PAGES = {
	processPage: {
		withSlash: `/${processPage}`,
		onlyPath: processPage
	},
	reservePage: {
		withSlash: `/${processPage}/${reservePage}`,
		onlyPath: reservePage
	},
	evaluatePage: {
		withSlash: `/${processPage}/${evaluatePage}`,
		onlyPath: evaluatePage
	}
};
//#endregion

//#region  PATH GESTION
const managementPage = 'gestion';
const reserveReportPage = 'reporteReserva';
const customerPage = 'cliente';

export const PATH_MANAGEMENT_PAGES = {
	withSlash: `/${managementPage}`,
	onlyPath: managementPage,

	consola: {
		withSlash: `/${managementPage}/${reserveReportPage}`,
		onlyPath: reserveReportPage
	},
	genero: {
		withSlash: `/${managementPage}/${customerPage}`,
		onlyPath: customerPage
	}
};
//#endregion

//#region  PATH MANTENIMIENTOS
const maintenancePage = 'mantenimiento';
const maintenanceConsolePage = 'consola';
const maintenanceGenrePage = 'genero';
const maintenanceClasificationPage = 'clasificacion';
const maintenancePublisherPage = 'editorial';
const maintenanceTitlePage = 'titulo';

export const PATH_MAINTENANCES_PAGES = {
	withSlash: `/${maintenancePage}`,
	onlyPath: maintenancePage,

	consola: {
		withSlash: `/${maintenancePage}/${maintenanceConsolePage}`,
		onlyPath: maintenanceConsolePage
	},
	genero: {
		withSlash: `/${maintenancePage}/${maintenanceGenrePage}`,
		onlyPath: maintenanceGenrePage
	},
	clasificacion: {
		withSlash: `/${maintenancePage}/${maintenanceClasificationPage}`,
		onlyPath: maintenanceClasificationPage
	},
	editorial: {
		withSlash: `/${maintenancePage}/${maintenancePublisherPage}`,
		onlyPath: maintenancePublisherPage
	},
	titulo: {
		withSlash: `/${maintenancePage}/${maintenanceTitlePage}`,
		onlyPath: maintenanceTitlePage
	}
};
//#endregion

//#region  PATH AUTH
const loginPage = 'login';
const registerPage = 'register';
const recoverPasswordPage = 'recovery';
const restorePasswordPage = 'restore';

export const PATHS_AUTH_PAGES = {
	loginPage: {
		withSlash: `/${loginPage}`,
		onlyPath: loginPage
	},
	registerPage: {
		withSlash: `/${registerPage}`,
		onlyPath: registerPage
	},
	recoverPasswordPage: {
		withSlash: `/${recoverPasswordPage}`,
		onlyPath: recoverPasswordPage
	},
	restorePasswordPage: {
		withSlash: `/${restorePasswordPage}`,
		onlyPath: restorePasswordPage
	}
};
//#endregion

//#region  PATH MY ACCOUNT
const myAccountPage = 'my-account';
const myAccountChangePasswordPage = 'change-password';

export const PATH_MY_ACCOUNT_PAGES = {
	withSlash: `/${myAccountPage}`,
	onlyPath: myAccountPage,

	changePassword: {
		withSlash: `/${myAccountPage}/${myAccountChangePasswordPage}`,
		onlyPath: myAccountChangePasswordPage
	}
};
//#endregion

//#region NOT FOUND
export const PATH_NOT_FOUND_PAGE = {
	'not-found': {
		withSlash: '/not-found',
		onlyPath: 'not-found'
	}
};
//#endregion
