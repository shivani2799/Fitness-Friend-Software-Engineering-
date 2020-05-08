The music curator consists of 4 UI buttons, the playlist curator- which enables the user to select a workout type and then in turn follows up regarding the music genre the user prefers as well as the duration of their workout; the OAuth- which enables spotify integration; Spotify App- which provides the user with a music database without having to log-in to their spotify account, this database was essentially integrated for the music algorithm- more explantion follows below. Lastly, the 4th UI button is home, and this takes the user back to the homepage of Fitness Friend. 

Playlist Curator/Exercise Selector: 

	The Playlist Curator "Make a playlist" button allows the user to select (exercise, time, genre) pairings for any number of   		exercises they wish to do. In the back-end, the system dynamically updates three queues to store exercise, time, and genre 
	selections separately. In order to be passed to the music algorithm page, these queues are converted to strings and passed.
  




Spotify Authorization:
	OAuth is typically used when apps need access to the user's accounts such as Facebook, Instagram, Spotify and other leading user 	 platforms.
	We used the OAuth function to create a connection with the Spotify account of every User. 
	The user will click on the login button and will be redirected to Spotify website. 
	There they can login using their user id, email or facebook. After logging in the 
	user is redireted back to our app. Now, their Spotify account is synched with our app. 
	The OAuth basically uses a token mechanism to communicate between the Spotify Server and our app, Fitness Friend. 
	

Playlist creator:
	After the user synchs their account withour app, the user can now select an exercise they 
	want to do. They can also select the genre of music and how long they want to exercise. 
	This data will be passed to the Spotify app and a new playlist will be created for the
	user. The user can listen to this playlist on Spotify while exercising.
	
Music Algorithm: 
	The music algorithm can be located on the curation.js component and is the fourth page under the Playlist Curator button.
	It is entirely back-end and receives exercise, genre, and time queues as strings from the third exercise selector page. 
	A large part of this algorithm involves converting the string to a character array, and then to an int array. Next, exercises 
	are mapped to bpm ranges which are then put into a new queue. Genre numbers are mapped to strings and placed into a new genre 
	array. If the Spotify API were thoroughly integrated, these transformed user inputs could be placed directly into the API 
	method
	
	
	
Currently, we are having trouble with fully integrating some features to the fitness friend app; however, it is to be noted that these features work completely fine on their own. Due to newness to the snack expo interface and time constraints, debugging, at its best, was not possible. Some parts of the playlist curator and Spotify OAuth page, are not fully functions under the wings on fitness friend application. 

References used: 

Spotify API: We used the Spotify SDK guide and used OAuth, however Spotify included documentation for android studio like platforms and we have to debug it to fit the react native syntax so that it can be integrated within expo. 
Spotify App: After much research we decided to implement a music search only database and we based it off of a project already done, as we did not want to reinvent the wheel, However, since that was done a while back, the reference link is not found anymore. This search only database was created to test out the music algorithm and also as a backup, in case, the user was not able to Oauth Spotify. 

