# Form Validation using JavaScript
This is a simple javascript form validation project that I coded to enhance my JavaScript coding skills through implementing the user experience to catch errors during form input from the user.
I have coded this javaScript form validation project using HTML, CSS and JavaScript. Let's have a look at my work! :wave:

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
To install this project in your local repository / working environment, you need to clone this repository using git clone commandline:
````Using git clone
git clone https://github.com/KyleGichez/Form_Validation
````
After cloning this project repository into your local machine, extract the files in the folder to access the codebase of this project.
Yes! You did that? Let's get started: 🚶‍♂️ 

### The challenge

You should be able to:

- Build a form to collect user input such as:
1. First Name
2. Last Name
3. Email
4. Password
5. Confirm Password
- Use javaScript to handle the errors during user's input.
- Use form validation rules for password and confirm password to make sure that they are same.
- Use semantic HTML5 form markup.



### Links

- Solution URL: [GitHub](https://github.com/KyleGichez/Form_Validation)
- Live Site URL: [GitHub pages](https://kylegichez.github.io/Form_Validation/)

## My process

### Built with

- Custom CSS
- HTML5 Form Semantic Markup
- JavaScript

### What I learned

I have learned how to manipulate the DOM using javaScript to get elements through their unique identifiers.
```javaScript
const button = document.getElementById("submit");

const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");

```
I have also learned how to use the updated ES6 updated keywords for declaring variables ie the const keyword
```javaScript
const togglePassword =  document.querySelector("#togglePassword");
const password = document.querySelector("#password");

const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");
```
I have also learned to use the ternary operator to check the type of the input while toggling the show password icon.
````javaScript
const type1 = password1.getAttribute("type") === "password" ? "text" : "password";

````
````Ternary Operator

"password" ? "text" : "password";

````
## Author

- Website - [Gichure Maina](https://www.linkedin.com/in/gichure-maina-a45aab202/)
- Frontend Mentor - [@KyleGichez](https://www.frontendmentor.io/profile/KyleGichez)
- Twitter - [@KyleGichez](https://www.twitter.com/KyleGichez)

