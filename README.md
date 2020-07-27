[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Router & APIs

For today's lab, you'll be building out a small website with a partner. This will be a [pair programming](https://martinfowler.com/articles/on-pair-programming.html) lab. Each and every move you make should be done with your partner!

The lab will be broken down into two parts:

1. Build a React app that uses `react-router`
1. Communicate with Airtable to utilize user generated data.

## Prerequisites

- React
- Components and life cycle methods
- Props and state
- React Router

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Please turn in your submission by the deadline on your cohort calendar.

## Requirements

You will be building out a recipe app with your partner.

1. In Airtable, create a `recipes` base with the fields:

- created_at
- title
- ingredients
- steps

1. Create a homepage that lists out each of your recipes' names. Remember to hide your API Keys!

1. Create a `new` route that allows a user to create a new recipe. Link to this page from your home page.

3. Create a route that displays one of your recipes: `/recipes/:id`. Make each of your recipes on the home page link to these pages. On each page, display a recipe with its full information.

## Bonus

1. Create a button to delete recipes.
1. Create a form to update a recipe.
1. Add styling to your site.
