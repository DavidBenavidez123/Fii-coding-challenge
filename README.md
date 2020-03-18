# Fii-coding-challenge

Hello! this is the coding challenge.

SETUP

To get the app up and going first you must clone this repo and then download https://yarnpkg.com/ if not already installed. This is a package installer

Second you are going to want to cd into the hello-world folder in your command line and then run 'yarn add' to install all of the 
dependencies.

Once the dependencies are installed, please run 'yarn serve' to open up the local host server of the front end and then please go to 
http://localhost:8080/ to view the page.


DEPENDENCIES

axios - this was used to make an AJAX request to the api that was given

vuex - State management Library. This was used to have a global store just for state. Made axios call here then dispatched it to 
the HelloWold component to loop over the data.

vue-router - this was used to display different routes such as the home, about,login, and register page. 

vue-gallery - this was used to implement the image carousel. This component needed only an array of images but the api that was given 
had other data in it. So with vuex, in the store component I needed to use the getter function so that I'm able to push only the images from the api in a seperate array. 




 


