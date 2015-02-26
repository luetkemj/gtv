# Github Viewer

Beyond the course work from the [Angular JS: Get Started](http://www.pluralsight.com/courses/angularjs-get-started) course by Scott Allen over at PluralSight.

## Authentication
I wrote a very simple and very NOT FOR PRODUCTION quality simpleAuth service.

duplicate src/js/services/simpleAuth.js.template to src/js/services/simpleAuth.js
```bash
cp src/js/services/simpleAuth.js.template src/js/services/simpleAuth.js
```

If you overshoot your unauthenticated API call limit you'll have to authenticate.
Create an app on github to setup your keys. Paste them in src/js/services/simpleAuth.js

src/js/services/simpleAuth.js is ignored in .gitignore.

DO NOT VERSION YOUR API KEYS!

![](http://www.quickmeme.com/img/65/65eed5fd6adc52ed940f76b91d507693b43aecb09b6133e0b7e3f01947e5144a.jpg)