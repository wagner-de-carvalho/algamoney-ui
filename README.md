# AlgamoneyUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Start backend server
Open the backend where the `jar` is located and execute the following code:
- `java -jar --spring.datasource.username=root --spring.datasource.password=Qplim@3758 --algamoney.origin-permitida=http://localhost:4200`
Adding security parameters:
- `java -jar --spring.datasource.username=root --spring.datasource.password=Qplim@3758 --algamoney.origin-permitida=http://localhost:4200 --spring.profiles.active=oauth-security`

## Kill process on port
- `fuser -n tcp -k 9001` = kills process on port 9001.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
