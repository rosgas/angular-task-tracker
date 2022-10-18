# Angular Task Tracker

[![Angular](https://img.shields.io/badge/Made%20with-Angular-dd1b16.svg)](https://angular.io/)
[![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![npm](https://img.shields.io/badge/npm-v.8.19.2-28b463.svg)](https://www.npmjs.com/)
[![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white)](https://sass-lang.com/guide)

<br>

> A **responsive** task tracker app created using **Angular**. This is part of the **AngularCrushCourse** by [Traversy media](https://www.traversymedia.com/). I have personalized the layout using **Bootstrap**.

<br>

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

<br>

## Table of Contents

- <a href="#demo-section">Live Demo</a>
- <a href="#features-section">Features</a>
- <a href="#technologies-section">Technologies used</a>
- <a href="#data-storage">Data storage</a>
- <a href="#setup-section">Setup/Installation</a>
- <a href="#more">More</a>

<br>

<h2 id="demo-section">Demo</h2>

![Alt Text](app-demo.gif)

<br>

<h2 id="futures-section">Features</h2>

- **Add task**:

  - Add/Close button to show/hide the task **form**;

- Add a **reminder** icon to your task;

- **Clear task** button;

- **Responsive** on all devices;

<br>

<h2 id="technologies-section">Technologies used</h2>

- **Angular**
- **Typescript**
- **SCSS**
- **Bootstrap**
- **RxJS**

<br>

<h2 id="data-storage">Data Storage</h2>

<br>

The app uses [JSON server](https://my-json-server.typicode.com/) to **simulate a backend REST service**. This is a fast way to deliver data in JSON format to the front-end application and make sure everything is working as expected.

- Tasks list and task item data is stored in a json (db.json) file which will be returned by the fake API. This file contains the data which should be exposed by the REST API.

Following the sample of the db.json file:

```
{
  "tasks": [
    {
      "id": 1,
      "text": "Doctor appointment",
      "day": "May 5th at 2:30pm",
      "reminder": true
    },
    {
      "text": "Make dinner reservation",
      "day": "May 6th at 5:30 pm",
      "reminder": false,
      "id": 4
    },
    {
      "text": "Renew gym subscription",
      "day": "May 6th at 9:30 pm",
      "reminder": true,
      "id": 8
    }
  ]
}
```

<br>
<h2 id="setup-section">Setup/Installation</h2>

**1. Clone this repo:**

```
git clone https://github.com/rosgas/angular-task-traker.git
```

**2. Make sure you have Node.js installed** because you need access to **NPM** (the easiest way to install node.js is downloading it from the official website nodejs.org)

**3. Installation**

```
npm install
```

**4. Development server**

```
npm start
```

It will run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

**5. Start Json server**

```
npm run server
```

It will start JSON Server with the specified json file. Normally you need to specify a port number to avoid conflict with existing ports you are going to use.

<br>

<h2 id="more">More</h2>

- **Code scaffolding**

  Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- **Build**

  Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

- **Running unit tests**

  Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

- **Running end-to-end tests**

  Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

- **Further help**

  To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
