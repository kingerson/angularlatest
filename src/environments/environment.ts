// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,

  auth: {
    url: 'https://login.microsoftonline.com/realplaza.onmicrosoft.com/oauth2/token',
    client_id: 'b8b8baea-4a87-4458-ae82-ce9898a0ae15',
    client_secret: 'UM9F60G/5=:.iM]3t67[N3d_5JbyMq:k',
    scope: 'ms-rp-budgets ms-rp-filestorage ms-rp-workflowmanager ms-rp-nps offline_access',
    grand_type: 'password',
    resource: 'https://graph.microsoft.com'
  },

  api: {
    budgets: 'http://localhost:8083',
    itemComponent: '',
    storage: 'https://localhost:44326',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
