# H@ckUp

## Heroku Deployed Site
https://tranquil-mesa-50145.herokuapp.com/

## Summary
Hackup is a meetup inspired application for people in the tech community to meet, based on the
similar technology interests. The user can like, edit, delete and create events once logged in.
We used the Mapbox API to show the location for each event.

## User Story
Initial Start
- On the landing page of the website, events ordered by time added will be listed.

- A new user can register and a returning user can log in or log out. 

- On the home page after login, a personalized page will show the user's liked events and created events.

- The user will be able to 
- READ all the events they have chosen
- CREATE an event
- UPDATE an event
- DELETE an event
- like or unlike an event

## Technologies
- React
- Express
- PostgreSQL
- Mapbox API

## Installation Instructions
- npm install
- yarn install inside the client folder
- psql -f db/schema.psql
- psql -f db/seed.sql

## MVP
- API
- CRUD
- Auth
- Likes

## Post MVP
- Styling
- Search bar
- Comments
- Show the map with the marker location of all events

## Workflow
- setup - all
- post setup - pair programming, switching periodically
- divided between Front-End and Back-End so less github issues 
- Style guide: airBnb

## Wireframe
<img src="wireframe.jpg" />

## ERD
<img src="ERD_wireframe.jpg"/>

## Time Management
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CRUD(Express/REACT) | H | 48hrs | N/A | 14hrs |
| Auth | H | 10hrs| 3 | 12hrs |
| Login/register/logout | H | 13hrs | 4.5hrs | 14hrs |
| API | H | 10hrs| 12 | 18hrs |
| Styling | L | 5hrs|  | 4hrs |
| Setup Server | H | 2hrs| 1.5hrs | 1.5hrs |
| event "likes" Functionality | m | |  | 10hrs |
|  |  | |  |  |
| Total |  | 75hrs |  | 73.5 |

## Obstacles
- Issues customizing the features of mapbox.com api  to make it fit our project goals

## code-snippet
```
const filter = this.props.name ? (this.props.events.filter(event => event.user_id === this.props.name.id)) : ['No events'];
const filterLikes = this.props.name ? (this.props.likes.filter(likes => likes.liker_id === this.props.name.id)) : ['No likes'];
const greeting = this.props.name ? (this.props.name.username) : "Guest"
//personalized greeting to each username
const loggedIn = (greeting === "Guest") ? (<Link to='api/auth/register'><h2>create an account</h2></Link>)
: (
	<div className='home-container'>
		<div className='home-left'>
			<p>My Events:</p>
			{filter.map(event => (
				<div className='my-event'>
					<Link to={`api/events/${event.id}`}>
						<div key={event.id}>
							<p className='my-event'>{event.event}</p>
						</div>
					</Link>
				</div>
			))}
		</div>
		<div className='home-right'>
			<p>I Am Going To:</p>
			{filterLikes.map(like => (
				<div className='my-event'>
					<Link to={`api/events/${like.events_id}`}>
						<div key={like.events_id}>
							<p className='my-event'>{like.events_id}</p>
						</div>
					</Link>
				</div>
			))}
		</div>
	</div>
)
```
