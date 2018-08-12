# XsolveTest

## Check error handling

Error handling is based on [Angular Interceptor](https://angular.io/api/common/http/HttpInterceptor). The simpliest way to see an error notification is to:
1. Go to "Find user"
2. Use user id that doesn't exists (ex. 0)
3. Error will be shown 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).