# Would You Rather Project

This is the code for the final assessment project for Udacity's React & Redux course.

This project is forked from https://github.com/udacity/reactnd-project-would-you-rather-starter.

## Authors

- [Nil Seri](https://github.com/nilseri01)

## To Get Started

- install all project dependencies with `npm install`
- start the development server with `npm start`

You can also use `yarn install` and `yarn start` if yarn is installed.

Then you can visit http://localhost:3000/ to use the application.

## Usage

You can choose with which user you want to login from your welcome screen.

After you select, you are now able to see both answered and unanswered questions of the user, add New Question or see Leaderboard.

You can see poll results for an answered question directly from answered tab. After you answer an unanswered question, you will be directed to see the poll results.

If you are logged in and route to an undefined url, you will be shown a 404 page.

## Screenshots

Login Page:
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/login-page.png)

Homepage:
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/homepage.png)

Add Question Page:
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/new-question.png)

Answer Question Page (for an answered question):
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/answer-question.png)

View Poll Page (for an answered question):
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/view-poll.png)

Leader Board Page
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/leader-board.png)

404 Page
![ScreenShot](https://raw.github.com/nilseri01/udacity-would-you-rather-react/master/screenshots/not-found.png)

## Data

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

There are two types of objects stored in our database:

- Users
- Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database.  
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |

## Contributing

https://github.com/udacity/reactnd-project-would-you-rather-starter is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
