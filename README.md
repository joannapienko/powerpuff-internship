# PowerpuffInternshipFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Before running project

- npm install -g @angular/cli@17
- npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Deploy to github pages

1. Merge your changes to gh-pages branch and run command in terminal:
   ng build --output-path docs --base-href /powerpuff-internship/
2. Get files from /docs/browser folder to /docs folder
3. Copy index.html file and paste is in docs folder
4. Rename index.html copy file to 404.html
5. Commit changes to gh-pages branch and push it to origin
