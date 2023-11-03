# Project: Flashcard-o-matic

**_Prompt_**:

A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. Application should offer users the ability to **create, manage, and study** a collection of flashcard decks.

## Table of Contents

- [Live Deployment](#live-deployment)
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)

## Live Deployment

Check out the live / deployed application here:

<span style="font-family:; font-size:2em;"> [Flashcard-o-matic app on Render](https://flashcard-app-5uey.onrender.com/)</span>

## Introduction

Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. The school needs you to build the application that the students and teachers will use.

## Acceptance Criteria

The finished application meets the following requirements for the users of the flashcard app:

1. [**User can view a list of all decks**](https://github.com/xqrkycyx/flashcard-o-matic/commit/c9c714cb9a542c3a50e50e232ab2fc7a570984c5) (_accessible from the home screen `'/'`_)
1. [**User can create a new deck of flashcards**](https://github.com/xqrkycyx/flashcard-o-matic/commit/4a2746754f6466e38f08ba8b22559de15186fc07) (_available at `/decks/new`_)
1. [**User can delete a deck**](https://github.com/xqrkycyx/flashcard-o-matic/commit/af88de60fbf4afcaa7ff16bf43211221c4666ed4) (_functionality to remove unwanted decks_)
1. [**User can view information about a single deck**](https://github.com/xqrkycyx/flashcard-o-matic/commit/3ec4e1cfc7e4e02dbc6d6dcd2591879d00d81e4d) (_accessible through `/decks/:deckId`_)
1. [**User can edit a single flashcard within a deck**](https://github.com/xqrkycyx/flashcard-o-matic/commit/d872b426f4fced0dac4ee5f598fdf2c74b0fb35f) (_feature available at `/decks/:deckId/cards/:cardId/edit`_)
1. [**User can add a new flashcard to a deck**](https://github.com/xqrkycyx/flashcard-o-matic/commit/56bb5306bc3d47e3713dc5a60bf4fc3766c48845) (_available at `/decks/:deckId/cards/new`_)
1. [**User can delete a flashcard from a deck**](https://github.com/xqrkycyx/flashcard-o-matic/commit/47c47206607e2bb5bde8866dc75c6084ec3ba06c) (_functionality to manage flashcards within a single deck_)
1. [**User can study all the cards in a deck**](https://github.com/xqrkycyx/flashcard-o-matic/commit/bea00341b231b68e8c0604d2a78cc5627aec9922) (_accessible at `/decks/:deckId:/study`_)

## Installation

To install and boot up the project:

```bash
npm install && npm start
# or
yarn install && yarn run
```

To run the tests:

```
npm test
```
