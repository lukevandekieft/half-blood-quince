# _The Half-Blood Quince_

#### _A Virtual Cookbook App, 12/1/18_

#### By _**Luke Vandekieft**_

## Project Description

At its core this app is a virtual cookbook. Where existing cooking apps emphasize ease of use this project focuses on improving the traditional cookbook model with modern technology.

Plenty of powerful cooking apps exist like Pinterest, Yummly, and AllRecipes. My personal favorite Yummly provides over 2 million recipes, easy serving adjustments, a shopping list, and suggested recipes. With all those benefits why bother making yet another contender?

I feel that popular cooking apps gain functionality at the expense of personalization. In a printed book I can add any recipe I want simply by inserting a page and I can add notes by simply writing in the margins, a la Harry Potter’s Half-Blood Prince. By contrast I cannot edit an online recipe without the author’s permission and recipe apps don't always include meaningful note-taking or authorship options. Furthermore every app has a limited repertoire so more obscure recipes can't be included (looking at you, vegan mapo tofu). These are basic but important needs that have prevented me from going all-in with an existing platform.

While Half-Blood Quince isn't as powerful or flashy as others it allows unprecedented customization: all your recipes can be added and edited just like a print cooking binder! Welcome to home base for storing, editing, and growing your recipe collection.
<br>
<br>
<br>

**V3 Goals:**

* Lazy loading so 100 images aren't loaded at once
* Restyle Menu - remove wood background & make buttons cleaner
* Restyle recipe pages - recipe tags, buttons, & image
* Improve parsing of user-submitted data
* Allow searching for non-title fields
* Create demo page with READ but no WRITE access
* Add servings feature that alters ingredient amounts
* Change data organization (showing recipe name AA0-323f.... first doesn't mean anything)

**Past Iterations**
* **v1.0**: 2018 build for Epicodus capstone project
    * Recipe CRUD
    * User management with OAuth support
    * Firebase NoSQL data support
    * Live deployment to halfbloodquince.com
* **v2.0**: 2020 upgrade for appearance and quality
    * Switch to Material Components library
    * Major styles overhaul - remove gaudy appearances
    * Switch to modular, DRY code from code school first draft
    * Add search function with recipe tags and ratings

## Setup/Installation Requirements

Live site is at https://www.halfbloodquince.com/         
<br>
<br>

To download & edit do the following:

* Download file from Github.

      $ git clone https://github.com/lukevandekieft/half-blood-quince.git

* Install NPM (node package manager) as needed - instructions can be found at https://www.npmjs.com/get-npm .

* Install necessary webpack dependencies for project.

      $ npm install

* Create file src/constants/firebaseConfig.js and include the following. You will need to get the API key and sender ID from me.

      const firebaseConfig = {
          apiKey: "[YOUR KEY]",
          authDomain: "half-blood-quince.firebaseapp.com",
          databaseURL: "https://half-blood-quince.firebaseio.com",
          projectId: "half-blood-quince",
          storageBucket: "half-blood-quince.appspot.com",
          messagingSenderId: "[YOUR ID]"
        };

      export default firebaseConfig;

* Compile and open webpage in developer mode.

      $ npm run start

## Deployment Process

1. Make sure your device is logged in to Firebase:
    ```
    $ firebase logout
    $ firebase login --interactive
    ```

2. Deploy your content:
    ```
    $ npm run deploy
    ```

## Technologies Used

* _React Library_
* _HTML_
* _JavaScript_
* _Sass preprocessor_
* _CSS_
* _Firebase_
* _JSX_
* _Webpack_
* _Sketch_
* [_Custom React Scripts_](https://www.npmjs.com/package/custom-react-scripts)

## Support and contact details

If you have any concerns or suggestions please contact Luke Vandekieft at vandekie@gmail.com

### License

*This software is licensed under the MIT License.*

Copyright (c) 2021 **_Luke Vandekieft_**
