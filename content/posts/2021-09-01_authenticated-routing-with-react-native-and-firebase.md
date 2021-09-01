---
date: "2021-09-01"
title: "Authenticated routing with React Native & Firebase"
description: "I set up some authenticated routes in 7s & 15s"
---

After the marvelous adventures of getting my boilerplate set up, it was finally time to move on to adding in users and authenticated routing. For those not in the know, authenticated routing is a method where users can only access certain routes after they have been authenticated, i.e. logged in.

I more or less followed along with [this blog post from LogRocket](https://blog.logrocket.com/how-to-set-up-email-authentication-with-react-native-react-navigation-and-firebase/). I won't be doing a deep dive and posting code, but the TL;DR notes for setting up authenticated routing in React Native with Firebase is as follows:

1. Be sure to install `@react-navigation/stack` if you haven't already

2. In the Firebase console, enable Authentication, and whatever method of auth you would like. I chose Email/Password, but will be adding others like Google and Apple later. That's a future Dylan problem 🤠

3. Create your custom login & register screens

4. Create 2 separate navigation stacks, one for Auth, and one for when the user is logged in (Home).

5. Via React hooks, we'll need to set up context & provider for listening in on authentication.

6. In this new AuthContext, we'll grab the user from state, and also give it the methods for logging in from `@react-native-firebase`

7. Using this new AuthContext & Provider, we'll listen in on user auth changes by using `@react-native-firebase`'s `auth().onAuthStateChanged()` method

8. After all that, all we need to do is conditionally render the navigation stacks using something super simple, along the lines of `if (user isAuthenticated){render HomeStack} else {render AuthStack}`

Now when a user logs in, they will be automatically taken to the home screen, and to the login/register screen after they log out.

I also created a "public profile" collection in firebase for managing public facing user data, such as usernames. These can all be edited by the user. I did this by creating a `profiles` collection in Firebase, then creating documents with the title of the users `uid`. The plan for this is for rugby club coaches, or "owners" in my Firebase terms, will be able to view the usernames of everybody who has joined their team. Eventually, these users will also be able to RSVP to events that the coaches and owners make for their team.

Well, that's all for now. See ya next time with another 7s & 15s update 👋
