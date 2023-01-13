# Table of Content 
- [Introduction](introduction)
- [Features](#features)
- [Dependencies](#dependencies)
- [Setup](#setup)
	- [Setting Up Local Environment](#run-locally)
	- [Running Tests](#running-tests)
- [Live](#live)

## Introduction
Say the Number solution, built using TypeScript as the main language and Angular for a little bit of spice :fire:

The application allows users to enter a number on a keypad and the numerical value will be converted into words.

## Features 
- Convert number to text 
- Text-to-speech

## Dependencies 
In order to run the application, you require [Node](#node) or [Docker](#docker) to be present on your local machine.

###### Development
- [Angular]()
- [Tailwindcss]()

###### Testing
- [Karma]()
- [Jasmine]()

## Setup

#### Run Locally
The application can be run on any machine and operating system that has either [Docker]() or [Node]() installed.

##### Docker
The dockerfile contains implementation to run the application using [node:alpine]()  and [nginx:alpine]()

1. Make sure you are in the `say-the-number` directory
2. Create the docker image 
``` shell
docker build -t say-the-number .
```
3. Run the image as a container, you can map the application to any available port
``` shell
docker run -it -rm -p 8000:80 say-the-number
```
4. The application should be available at `http://localhost:8000`

##### Node 
1. Make sure you are in the `say-the-number` directory
2. Install all of the dependencies 
``` shell 
npm ci
```
3. Run the application 
``` shell
ng serve
```

#### Running Tests

###### Tests on Docker
The tests will run as part of the build process and the results should be printed on the command line. 

###### Tests on Node
1. Make sure you are in the `say-the-number` directory 
2. Run the following command to run tests
``` shell
ng test --no-watch --no-progress
```

## Live
The application is hosted on railway 
