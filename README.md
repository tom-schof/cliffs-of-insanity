# Weightloss Tracker API

## Purpose

This API is to see how much you know about NodeJS, Sails, as well as debugging code. This is a simple application that will allow a user to track their weight loss while we see how well you work through problems and implement new features. Feel free to fully understand this codebase.

## Required Criteria

1. Setup the application on your machine
2. Get the API, as it currently coded, to work.
	- This may entail working through a number of issues. 
3. Add new CRUD endpoints to allow the administrator handle users
4. Encrypt the user's password
5. Write a NodeJS script that will: 
	- Login a user
	- Log the user's weight one per day for the past two weeks. This should be a different
	- Update the user to have `goal`
6. Be creative
  - Come up with a new feature that really makes your skills shine.
	- This should showcase your knowledge of RESTful API 

## Usage

Initial login to the API: 
  username = admin
  password = admin

## Output

To verify you are saving the data properly please run the following command `sails run take-snapshot`.  This will pull all of your models and return all the data.  

```
user
-----------------
[ { createdAt: 1537898850080,
    updatedAt: 1537898850080,
    id: 4,
    username: 'admin',
    name: 'Administrator',
    password: 'admin',
    goal: 0 } ]
weight
-----------------
[]
```
