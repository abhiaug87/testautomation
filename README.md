# About the framework

##### *Language Used* - TypeScript

##### *Framework* - Webdriver IO  (wdio-jasmine) - http://webdriver.io/

# Getting started

1.  Install Node.JS
    http://nodejs.org
2.  Install Java SE Development- version 8 or above
    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
3.	Open a new git bash prompt
4.	Install typescript globally `npm install -g typescript`
5.	Install `npx` globally `npm install -g npx`
6.      Run the command 'npm install wdio-jasmine-framework'
7.	Install selenium drivers `npx selenium-standalone install` ( *Note If `npx selenium-standalone` is not recognized, please install `selenium-standalone` globally `npm install selenium-standalone@latest -g`*)
8.	Start Selenium `npx selenium-standalone start`



# Running tests

1.	Open a new git bash prompt
2.      Go to directory
3.	Compile the code
      tsc
4.	Run the test
      npx wdio --specs

