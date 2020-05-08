Fitness Friend
Fitness Friend is an application to help motivate our users to workout and stick to a healthy lifestyle. The application contains three main features:
* Calendar Sync - Connects to the user’s Google Calendar and detects available freetime to notify the user to workout
* Calorie Tracker - Updates the user on their calorie intake and outake, provides graphical analysis of weekly workouts, and motivates user to set and reach weight goals
* Music Curator - Provides the user with an option to create a Spotify playlist to match their workout routine.
Getting Started
These instructions will get you a copy of the project, up and running on, your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
Prerequisites
In order to use our app, you will need the following things:
* an Android smart device
* access to a web browser (preferably on a computer)
* an internet connection
* access to the Fitness Friend app folder on the device that the web browser will be used
How To Use
Using the steps below, you will be able to open our app that will be hosted through the Snack.io server.
1. Unlock your mobile device and navigate to the app store/Google Play store
2. Search for the app "Expo Client" and download it to your phone
3. Navigate to your web browser of choice and go to the web page "snack.expo.io"
4. On the left hand side, on the navigation bar, click the icon that looks like three dots vertically aligned. 
5. After clicking the three dots icon, click the option labeled: "Import 
6. Once the project is uploaded and compiled, change the name of the snack to a name of your pleasing, to make it easier to identify in the future
7. Navigate to the Android option, found on the navigation bar on the right hand side and click: "Run on your device"
8. Open the "Expo Client" app, previously downloaded, and navigate to the "Projects" tab found on the bottom navigation bar
9. Find your unique Device ID and enter that into the Device ID input box on your web browser
10. Once the Device ID is inputted, click the "Save" button
11. Navigate back to the "Expo Client" app on your smart device, and under the "Projects" tab, under the "Recently in Development", the snack that you previously named should be there
12. Click on the name of the snack, and the app will launch.
Authentication 
The user is given the option to login with a premade account within the Firebase Database or signup for an account. For testing purposes, an example of an account connected to the database is: email: test@test.com, password: password. Logging in with this information will match with the information found in the Database folder. However, you can create a new account and it will work the same.
Calendar Sync
Once a user is logged in, the user clicks on the Calendar option. This leads them to the calendar page.
The Calendar page will initially be blank with only the toggle notification dropdown menu, save button, and back button showing. Once the user toggles free time notifications to be on, they will be shown the dropdown menus for the free time preferences - start time, end time, workout time needed, and notify time. Once the user updates these preferences, they will need to press the save button in order for their preferences to be saved in the Firebase real-time database. Additional buttons will also appear that will allow the user to log into their Google account, to sync their Google calendar, and navigate to the notification timer page, where they can see the time in which they can expect the system to notify them again, if enough free time is available within their pre-set interval.
If the user presses the Google Authentication button, the user will be directed to the Google specific login website. Here, they can log into their pre-existing Google account, allowing them to sync their Google calendar with the app, removing the need of inputting events manually. 
**Note: Currently, Snack Expo does not support the Google Calendar API as it is not one of the npms they have pre-installed within their software. Because of this, we were unable to utilize the Google Calendar feature within our integrated Snack. In addition to this, Google only hands out specific web keys needed in order to use their Google Authentication system on a mobile device. Because of this, unless you are using a web app, the Google Authentication page will not appear when this button is pressed. 
If the user presses the Notification Timer button, the user will be directed to a page that will show a countdown. This countdown indicates the time in which they can expect the system to notify them again, if enough free time is available within their pre-set interval. Once the countdown reaches zero,  the system will check again to see if there is enough free time needed to implement a workout within the pre-set free time interval. If there is enough free time within the free time interval, the user will be notified by means of a push notification.
**Note: More information can be found within the Calendar README file
Calorie Tracker
Once a user is logged in, the user clicks on the Calorie Tracker option. This leads them to our Homescreen.
The Homescreen displays the user’s calorie intake for the day at the top of the screen and displays graphs as the bottom of the screen to show the user’s activity. In the middle of the screen, there is an Input Food button, an Input Exercise button, and an Input Goals button.
If the user presses the Input Food option, the user will be directed to a page that contains two search bars. The user can search for the food they consumed by using the food name or the UPC Barcode Number. Once they have found the correct food item, the user can specify the quantity consumed. The calories are then calculated and added to the Calorie Tracker.
If the user presses the Input Exercise button, the user will be directed to a menu-style page with exercise options. Once the user selects the exercise type, they will be prompted to enter the duration of the exercise and the date the exercise was completed. The information will be used to calculate the number of calories burned during the workout, and this information along with the date completed will be submitted to the database.
If the user presses the Input Goals button, the user will be directed to a similar page as the Exercise page, but with prompts about the user’s goals. They will be allowed to input their gender, weight, goal--either gaining or losing weight, and their desired amount of pounds to gain or lose. Once the user submits this information, it will be sent to the database. When the user updates this information, if the user meets their goal, they will be prompted with an alert that they met their goal.
*Note: When inputting data, the user will have to press the button twice for the information to send to the database. This is due to the setState not changing on time.
**Note: More information can be found within the Calorie Tracker README file
Music Curator
Spotify Authorization:
We used the OAuth function to create a connection with the Spotify account of every User. The user will click on the login button and will be redirected to Spotify website. 
        There they can login using their user id, email or facebook. After logging in the 
user is redirected back to our app. Now, their Spotify account is synched with our app. 


Playlist creator:
After the user syncs their account without app, the user can now select an exercise they want to do. They can also select the genre of music and how long they want to exercise. This data will be passed to the Spotify app and a new playlist will be created for the user. The user can listen to this playlist on Spotify while exercising.


Running the tests
Unit tests and Integration tests can be found in the Tests folder.
Built With
* Snack Expo - React Native online editor
* JavaScript
* Edamam API
* Google Firebase Database
Authors
* Amber Haynes
* Tiyon King
* Jenna Krause
* Mya Odrick
* Devvrat Patel
* Andrew Rezk
* Maria Rios
* Shivani Sunil
* Hedaya Walter