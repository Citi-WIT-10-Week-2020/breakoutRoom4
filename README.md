# AcornSQURL

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.
## Setup Local Environemnt

For each numerical step, please read the entire step before beginning to implement it
1.       Open github, navigate to https://github.com/Citi-WIT-10-Week-2020/breakoutRoom4
2.       Click the green clone or download button
3.       Copy the URL from the clone or download button
4.       Open a terminal. In the Command line, run the following command:
    a.       git clone <URL-you-copied>
5.       This clones the directory into your local environment
6.       To navigate into the directory that you just cloned, run the following:
    a.       cd breakoutRoom4
7.       You should now be in the directory breakoutRoom4
8.       We will now check the branches present. Run the following:
    a.       git branch
    b.       If you see three branches, *master, dev, and authfeature, you are good to go
    c.       If you only see *master, run the following:
    d.       git checkout dev
    e.       git checkout authfeature
    f.        git checkout master
9.       Open the directory in Visual Studio Code. If you are on PC, type:
    a.       code .
    b.       If you are on Mac, you’ll have to open it manually by opening VS Code, clicking open folder, and selecting the folder      breakoutRoom4
10.   Open a terminal in your VS Code and run the following command, which installs all the packages needed for the project:
    a.       npm install
11.   You should still have a bunch of errors at this point, which is OK
12.   Now we’re going to install the Amplify CLI. Run the following:
    a.       npm install -g @aws-amplify/cli
13.   Now we’re going to configure the Amplify CLI. Run the following:
    a.       amplify configure
    b.       Go through the steps that the terminal gives you. This might open your browser and navigate you to the AWS site, but you DO NOT have to do anything in your browser. Just close out of it and keep hitting enter in your terminal.
    c.       The terminal will eventually ask you for an Access Key and Secret Access Key. Copy and Paste these from the cred doc.
    d.       For all the other questions, continue to press enter to keep the default settings
14.   Now run the following
    a.       amplify init
    b.       This will ask you if you would like to use a preexisting environment. Type Y for yes
    c.       Select prod from the list of environments
    d.       This will also ask if you’d like to use a preexisting account. Type Y and then hit enter to use the default account (this is the one you configured previously)
15.   Run the following:
    a.       amplify pull
    b.       amplify status
    c.       You should be given a table with red titles. There should be one entry in the table : Auth
    d.       It should look close, but not identical, to this:
    e.       If the value under Operation is ‘Create’ or ‘Update’ then run the following
    f.        amplify push
16.   Now we will check to see if everything is set up properly. Run the following:
    a.       ng serve -o
    b.       Wait for compilation. If you see the login screen, congrats! You have successfully set up your local environment. If you see an error, please contact me 😊 and we will debug.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
