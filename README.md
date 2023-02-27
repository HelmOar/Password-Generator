# Password-Generator


## Description

The application is intented to support employees, working with sensitive data, to create strong passwords for themselves. According to security experts, passwords are quite often extremely weak and easy to guess, as demonstrated when "123456" was declared the most popular password of 2020. On top of a simple guess, botnet power or brute force can also be implemented to crack open the password if it is too short. 

 The Password-Generator solves this issue by randomly generating secure passwords based on criteria chosen by the user. Password-Generator can generate a unique password from 8-128 characters including both upper and lowercase characters, numerical characters and 16 special characters. The combination of length and diversity is essential for password best practise and as brute force power increases, passwords also need to evolve with ever increasing complexity.
 
 The Password-Generator app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript. The UI is clean and responsive to multiple screen sizes. 

The code uses logic based JavaScript with an initial selection of prompt and confirmation windows which collect the input for the password requirements which are stored into variables. Possible characters are indexed into an array and then chosen from the input requiremnts using if statements. Finally the password is generated to it's predetermined length by using iteration and the Math.floor(Math.random() to randomise the characters. The unique password is then displayed on the screen. 

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Caroline Helmore chelmore1@bigpond.com

## License

Unliscensed 



## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.