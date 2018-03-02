# Elite Dangerous Panel

This is the repo for the Elite Dangerous Panel that comes featured with Panels App (www.panelsapp.io). If you're unfamiliar with how these Panels work, a good primer can be found [here](http://panelsapp.freeforums.net/thread/3/developer-started). 

This is an Angular-4 web app built with the angular cli. It also uses an [Elite Dangerous Data Feed](https://github.com/CRodriguez25/EliteDataFeed) to route Journal Entry events to the panel.

In order to build and package the panel for import into the Panels App, run these two commands

ng build
gulp package

ng build will compile the Typescript into the dist folder
gulp package will take the dist folder, Settings.json file, and data feeds and generate the .panelpkg file inside of the panel-package folder. This .panelpkg file can then be imported into the Panels Desktop client for testing.

# EliteDangerous

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
