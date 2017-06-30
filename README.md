# BetterDoctor API website

#### Week 1 Independent Project - JavaScript

#### By **Rose Sponseller, June 30 2017**

### Description

Looking for a doctor? Type in current symptoms or ailments (e.g., heart disease or sore throat) to find a list of doctors in the Portland, Oregon who can treat the issue, along with their address information. This site uses the BetterDoctor API to retrieve this information.

### Screenshot of website

![screenshot of project](https://github.com/avocadobravado/javascript-week1/blob/master/img/scs01.png?raw=true)

![screenshot of project](https://github.com/avocadobravado/javascript-week1/blob/master/img/scs02.png?raw=true)

### View website
A live version of the site be may be accessed at this [link](rawgit.com/avocadobravado/javascript-week1/master/dist/index.html)

### Installation

Open your terminal and clone this repository with the following command:

```
$ git clone https://github.com/avocadobravado/javascript-week1
```

Move into the cloned repository:

```
$ cd javascript-week1
```

In the top level of the project's directory, create a hidden file for your API key:

```
$ touch .env
```

Create an account with BetterDoctor to retrieve your own free API key:

```
https://developer.betterdoctor.com/
```

Your API key should be secret, so keep it in a hidden file! Here's how: add the API key to your .env file:

```
exports.apiKey = 'your unique key HERE';
```

Add .env to your .gitignore file. If there is no .gitignore file, then `touch .gitignore` to create one:

```
bower_components/
node_modules/
.DS_Store
build/
tmp/
.env
```  

Install npm and Bower by typing:

```
$ npm install
$ bower install
```

Initialize npm and Bower:

```
$ npm init
$ bower init
```

Set up the build:

```
$ gulp build
```

Start the server:

```
$ gulp serve
```

Step 10 should immediately open up a web browser such as Google Chrome and take you to the site, but if not, visit the following address in your preferred browser:

```
localhost:3000
```

## Built With

* HTML
* CSS
* Sass
* BetterDoctor API
* JavaScript
* jQuery
* npm
* Bower
* gulp
* Font Awesome
* Google Fonts

## Known Bugs

* If the user inputs a symptom that returns no results, nothing will display on the page.

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## License

This project is licensed under the MIT License

**_Rose Sponseller_** Copyright (c) 2017
