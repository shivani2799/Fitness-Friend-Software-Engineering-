The music curator consists of 4 UI buttons, the playlist curator- which enables the user to select a workout type and then in turn follows up regarding the music genre the user prefers as well as the duration of their workout; the OAuth- which enables spotify integration; Spotify App- which provides the user with a music database without having to log-in to their spotify account, this database was essentially integrated for the music algorithm- more explantion follows below. Lastly, the 4th UI button is home, and this takes the user back to the homepage of Fitness Friend. 

Playlist Curator/Exercise Selector: 
	The Playlist Curator "Make a playlist" button allows the user to select (exercise, time, genre) pairings for any number of 	
	exercises they wish to do. In the back-end, the system dynamically updates three queues to store exercise, time, and genre 	
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
	method.
	
	
