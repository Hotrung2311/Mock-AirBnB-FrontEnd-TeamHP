// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  firebaseConfig : {
    apiKey: "AIzaSyBAXi6Zbvv6t-AK0Kcak9m7EtpQcDKXLhg",
    authDomain: "upload-image-41211.firebaseapp.com",
    databaseURL: "https://upload-image-41211.firebaseio.com",
    projectId: "upload-image-41211",
    storageBucket: "upload-image-41211.appspot.com",
    messagingSenderId: "1014639664510",
    appId: "1:1014639664510:web:c4634f029564ac430d272f",
    measurementId: "G-FNJQDCDNXZ"
  },

  API_URL_PRODUCT: "http://localhost:8080/products",
  API_URL_ACCOUNT: "http://localhost:8080/accounts",
  API_URL_ORDER: "http://localhost:8080/orders",
  API_URL_IMAGE: "http://localhost:8080/images",
  API_URL_TYPE: "http://localhost:8080/types",
  API_URL_DETAIL: "http://localhost:8080/details",

  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
