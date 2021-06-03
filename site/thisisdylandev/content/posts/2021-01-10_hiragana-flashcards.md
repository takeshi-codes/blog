---
slug: 'hiragana-flashcards-project'
date: '2021-01-10'
title: 'Hiragana Flashcards Project'
description: 'Dylan is learning Japanese and is using Next.js to help'
---

I've finished up my first of 12 projects for the year, for my first project I
decided to make a flashcard app for learning Japanese hiragana.

In a previous blog post, I mentioned that I wanted to learn Japanese. Something
I've been struggling with on this is the hiragana. So to try to tighten up on
it, I decided to start working with flashcards to learn quickly.

To make this project, I used next.js. This is my second time using next.js, and
it was an absolute blast to use. I acquired some SVGs of the hiragana
characters, and used the next.js Image component to load them in, so that they
were just about always mobile-friendly. This may not be the best way to do it,
but to create the deck of flashcards, I have a json file that has the image file
names and their romanizations, and used that to create an array, then looped
through the array to create the flashcard component that displays on the screen.

I have the app hosted on Vercel, and you can check it out
[here](https://hiragana-flashcards.vercel.app/), and I have all the code up on
my [Github](https://github.com/thisisdylandev/hiragana-flashcards). I've still
got some cleaning up to do in the repo, but for the most part it's all done!

Well, that's all for now 👋
