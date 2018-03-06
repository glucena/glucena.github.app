// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCvMX3FNNfPBAsXPcgwiQxjm-3Bae8kv8k",
    authDomain: "glucena-io.firebaseapp.com",
    databaseURL: "https://glucena-io.firebaseio.com",
    projectId: "glucena-io",
    storageBucket: "glucena-io.appspot.com",
    messagingSenderId: "271979341477"
  }
};
