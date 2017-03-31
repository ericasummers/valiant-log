# Valiant Log

This webpage logs the meals of the last survivors of the Valiant, an exploratory spaceship stranded in the Shadow Stretch, a narrow, dark sector of space between galaxies. It allows a Valiant crew member to view, submit, edit and delete meals to ensure they are properly logging their food consumption to make the most of the meager supplies remaining on the ship.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Behaviors

|Behavior|Output|
|--------|------|
|Log meal eaten "Reconstituted vegetables, 400 calories"|Page displays list of meals with "Reconstituted vegetables" added|
|Browse all meals logged|Page displays full list of all meals logged|
|User selects to view high-calorie meals only|Page only displays meals with calorie content above 500|
|User selects to edit meal and makes changes|Page is updated with new values|
|User selects to delete a logged meal|Meal is removed from full list|

## Installation Instructions

* `git clone https://github.com/ericaw21/valiant-log>` https://github.com/ericaw21/valiant-log
* `cd valiant-log`
* Set up your Firebase API Key by creating a file to paste your API keys called `api-keys.ts` at this directory: `src/app/api-keys.ts`
* Paste your Firebase-provided keys into that document as follows:
`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };`
* `npm install`
* `bower install`
* `npm install angularfire2 firebase --save`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Copyright (c) 2017 Erica Wright All Rights Reserved.
