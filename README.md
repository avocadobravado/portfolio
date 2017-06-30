# Better Doctors API website

#### Week 1 Independent Project - JavaScript

#### By **Rose Sponseller, June 30 2017**

### Description

Coming soon~

### Screenshot of website

![screenshot of project](https://github.com/avocadobravado/javascript-week01/blob/master/img/scs.png?raw=true)

### Installation

1) Open your terminal and clone this repository with the following command:

```
$ git clone https://github.com/avocadobravado/javascript-week01
```

2) Move into the cloned repository:

```
$ cd javascript-week01
```

3) In the top level of the project's directory, create a hidden file for your API key:

```
$ touch .env
```

4) Create an account with Better Doctor to retrieve your own free API key:

```
https://developer.betterdoctor.com/
```

5) Your API key should be secret, so keep it in a hidden file! Here's how: add the API key to your .env file:

```
exports.apiKey = 'your unique key HERE';
```

6) Add .env to your .gitignore file:

```
bower_components/
node_modules/
.DS_Store
build/
tmp/
.env
```  

7) Install npm and Bower by typing:

```
$ npm install
$ bower install
```

8) Initialize npm and Bower:

```
$ npm init
$ bower init
```

9) Run the build:

```
$ gulp build
```

10) Start the server:

```
$ gulp serve
```

11) Step 10 should immediately open up a web browser such as Google Chrome and take you to the site, but if not, visit the following address in your preferred browser:

```
localhost:3000
```

## Built With

* HTML
* CSS
* Sass
* Better Doctor API
* JavaScript
* jQuery

## Known Bugs

* Bugs coming soon~ :D

## Support and contact details

* Feel free to reach out with suggestions at rosesponseller@gmail.com

## License

This project is licensed under the MIT License

**_Rose Sponseller_** Copyright (c) 2017
