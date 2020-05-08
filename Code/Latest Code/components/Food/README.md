# Calorie Tracker

```
The Calorie Tracker consists of four main features: the ​ Homescreen ​, the ​ Food Input
page, the ​ Exercise Tracker ​ page, and the ​ Goals ​ page. The ​ Homescreen ​ contains
buttons that redirect the user to the other pages while also displaying graphs that reflect
the activity of the user and a user net calorie total. The ​ Food Input ​ page is where the
user can input what they have eaten which will then be converted into calories
consumed and displayed as part of the net calories on the Homescreen. The ​ Exercise
Tracker ​ page is where the user can input the type and duration of an exercise which
will then be converted into calories burned and displayed as part of the net calories on
the Homescreen. The ​ Goals ​ page is where the user can update their information and
fitness goals, displaying a message when the user has reached their current goal. All of
these features work to create an app that uses small goals and reminders to motivate
users to live a healthier life.
```
## Getting Started

```
The following are detailed instructions of how to use this feature and a description of
each component.
```
## How To Use

```
Once a user is logged in, the user clicks on the Calorie Tracker option. This leads them
to our Homescreen.
The Homescreen displays the user’s calorie intake for the day at the top of the screen
and displays graphs as the bottom of the screen to show the user’s activity. In the
middle of the screen, there is an Input Food button, an Input Exercise button, and an
Input Goals button.
If the user presses the Input Food option, the user will be directed to a page that
contains two search bars. The user can search for the food they consumed by using the
food name or the UPC Barcode Number. Once they have found the correct food item,
the user can specify the quantity consumed. The calories are then calculated and added
to the Calorie Tracker.
```

```
If the user presses the Input Exercise button, the user will be directed to a menu-style
page with exercise options. Once the user selects the exercise type, they will be
prompted to enter the duration of the exercise and the date the exercise was completed.
The information will be used to calculate the number of calories burned during the
workout, and this information along with the date completed will be submitted to the
database.
If the user presses the Input Goals button, the user will be directed to a similar page as
the Exercise page, but with prompts about the user’s goals. They will be allowed to
input their gender, weight, goal--either gaining or losing weight, and their desired
amount of pounds to gain or lose. Once the user submits this information, it will be sent
to the database. When the user updates this information, if the user meets their goal,
they will be prompted with an alert that they met their goal.
*Note: When inputting data, the user will have to press the button twice for the
information to send to the database. This is due to the setState not changing on time.
```
## Running the tests

```
Unit tests and Integration tests can be found in the Tests folder.
```
## Built With

```
● Snack Expo​ - React Native online editor
● JavaScript
● Edamam API
● Google Firebase Database
```
## Authors

```
● Mya Odrick
● Maria Rios
● Hedaya Walter
```

