# Hey, welcome!

  
This project was created by me as a login example page that stores and persists the login to any simple application that works with REST Apis and returns a TOKEN, that is saved on localStorage of the browser.
The javascript/Typescript framework used to create this project was ReactJs. Here are a few tools used as well:

- VITE
- Context-API
- React hooks
- AXIOS
- Typescript
- React-router-dom
- Bootstrap
- LocalStorage
etc...

To check other dependencies please go to package.json


It is important to notice that the user, once logged keeps the track of its token on localStorage, so when the page is refreshed or even closed, it doesn’t logout.
There is one protected route to simulate a navigation once the user is logged.


# How to run


**Clone**:
To clone the project please go to:
https://github.com/luisfop/context-login.git

On the terminal execute: 

    git clone: https://github.com/luisfop/context-login.git

Open the context-login folder:

    cd context-login/
    
Execute the command :

    npm install

   or

    yarn install

To run the application execute the command line:

    npm dev
    or
    yarn dev


# How to Use

Open the browser and go to URL:
http://localhost:5173/

The land page is the Login form.

# PS:

I chose not to use a form input validator library such as Vuelidate or Vuetify because I wanted to keep the code as simple and flexible as it was possible to integrate into any application.


# To authenticate the user, use this example:
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
