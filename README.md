# Voting App

The purpose of the project is to build a voting app similiar to [Example](https://voting-app.freecodecamp.rocks/).

## UX

**User Stories**

As an authenticated user, you can keep my polls and come back later to access them.

As an authenticated user, you can share my polls with my friends.

As an authenticated user, you can see the aggregate results of my polls.

As an authenticated user, you can see the aggregate results of my polls.

As an authenticated user, you can delete polls that I don't want anymore.

As an authenticated user, you can create a poll with any number of possible items.

As an authenticated or unauthenticated user, you can see and vote on everyone's polls.

As an authenticated or unauthenticated user, you can see the results of polls in chart form.  (This can be implemented using Chart.js or Google Charts.)

As an authenticated user, if you don't like the options on a poll, you can create a new option.

** Information Architecture **

User consists of the object local, which consists of username and password (both strings).

In the form, username (email) is an email and password is the password.

Poll consists of createdBy (String), createdAt (Date - currently at present date), title (String), answer (Object Array) and voteBy (Object Array).  Inside answer, there is title (String) and number (Number).  Inside voteBy, there is userID (String) and isVoted (Boolean).

## Features

To add, view or delete polls.

## Technologies

This project uses Bcrypt, Mongoose, Express.  Uses iFrame for the Share Button on Facebook.

## Testing

Make sure all the user stories have been met.

## Deployment

This project is on [REPL](https://voting-app.ddxps46.repl.co)

## Credits

### Content

Taken from [Tri Vi](https://github.com/triminhvi).  Accessed from 13 December 2021.  Code for Share Button was taken from [Facebook](https://developers.facebook.com/docs/plugins/share-button) (accessed on 16 December 2021).

### Acknowledgements

- [Tri Vi - GitHub Repository](https://github.com/triminhvi/Voting_App)
- [FreeCodeCamp](https://www.freecodecamp.org)
- [Facebook for Developers - Share Button](https://developers.facebook.com/docs/plugins/share-button)
- [Bootstrap](https://www.getbootstrap.com)
- [Passport](https://www.passportjs.org)

