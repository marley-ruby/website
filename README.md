# Makers Academy Beta Site

[ ![Codeship Status for makersacademy/site-mvp](https://codeship.com/projects/e5781160-fcad-0132-3d45-5a06a30fe976/status?branch=master)](https://codeship.com/projects/87550)

Our new-look website, currently viewable at [http://beta.makersacademy.com](http://beta.makersacademy.com).

## Why are we open sourcing our website?

Here at Makers Academy we believe in practising what we preach - which means both open-sourcing code wherever possible and writing code that we're proud to showcase to the world. We wanted our new website to be open so people can both see the principles that drive our code, and as a learning tool for students and graduates alike.

## Setting up the site locally

* Clone the repo
* Run `bundle` to install gems
* Start the server with `middleman s`
* Go to __http://localhost:4567__ to view the site in your browser

## Technologies used

* [Ruby](https://www.ruby-lang.org/en/) as our server side language
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[jQuery](http://jquery.com/) for client side scripts
* [Middleman](https://middlemanapp.com/) for compiling our code into a static website we can host on [GitHub pages](https://pages.github.com/)
* [RSpec](http://rspec.info/) for testing
* [Bower](http://bower.info/) for installing shared assets
* [Sass](http://sass-lang.com/) to help write our CSS
* [Bourbon](http://bourbon.io/)/[Neat](http://neat.bourbon.io/)/[Bitters](http://bitters.bourbon.io/) as a framework for our CSS

## Publishing to Bower

We use Bower to share our assets across the various Makers Academy websites. If
you need to update the assets here so a newer version can be made available to
our other sites, just run `rake publish:bower`, and enter a [semantic versioning
number](http://semver.org/).

The latest SASS changes will be compiled into CSS and a new version of the styles will be published to Bower.

## Versioning

We use [semantic versioning](http://semver.org) when creating new releases using
tags. This is used both for Bower (see above) and for tracking changes in
Mixpanel so we can compare how different versions of the website perform.

A few things to bear in mind:

- If you are only creating a release to update Bower with some style changes,
  just release a PATCH version
- If you have made a change that is important enough to be tracked in Mixpanel,
  release a MINOR version or if it's a huge change a MAJOR
- Make sure that when releasing a MAJOR or MINOR version (e.g. upgrading from 2.1.3 to 2.2.0) you:
  1. change in `config.rb` the `website_version` number - this number is sent to Mixpanel, **please don't forget to do this!**
  2. run `rake publish:bower` with the new version number to ensure that the **bower.json** file has the correct version
