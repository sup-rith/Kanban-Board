// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Firebase Credentials
  firebaseConfig: {
    apiKey: "AIzaSyAZp-FuPVb3Vu07VboQ5ebhVGp1J-a_CPs",
    authDomain: "kanban-3b5d1.firebaseapp.com",
    databaseURL: "https://kanban-3b5d1.firebaseio.com",
    projectId: "kanban-3b5d1",
    storageBucket: "",
    messagingSenderId: "1054336743999",
    appId: "1:1054336743999:web:1dd36e07db2695d26fd68a"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
