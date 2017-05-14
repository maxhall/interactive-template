# Embedded element template

A simple template to get you up and running developing responsive embedded elements.

Uses [Pym.js](http://blog.apps.npr.org/pym.js/) for responsive iframes, [Rollup](https://github.com/rollup/rollup) for bundling, [Babel](https://github.com/babel/babel) to transpile Javascript and [Sass](http://sass-lang.com/) for better css.

This project was designed to meet the needs of [Honi Soit](http://www.honisoit.com) and is heavily inspired by the Guardian's cool [interactive atom template](https://www.github.com/guardian/interactive-atom-template).

## Installation

1. Clone or download this repository
2. Rename the folder to something which fits your project
3. Update the name, description and urls in `package.json` to reflect your project
4. Run `npm install`

## Usage
Run `gulp watch`. You can now see any changes you make to the source files live at `localhost:3000`.

Edit the index.html and the sass and javascript to your heart's content. Place any static assets in the `assets` folder.

We use Sass partials to keep things organised and ES2015 imports to keep javascript in separate files. You might like a good [overview of ES2015 imports]() and an [example in practice]().

### Including libraries

To include javascript libraries like [d3](https://github.com/d3/d3) for use in your project install the package using node and import it into `main.js` as you would any module.

Taking d3 as an example:
1. Run `npm install d3 --save`
2. Add `import d3 from 'd3';` to your `main.js`
3. You're good to go.

## Deploying

The best way to host your interactive elements depends on how you answer a few questions. Are you expecting enormous amounts of traffic? Do the files need to stay on your servers? Is speed absolutely critical? Will it be catastrophic if your interactive were to randomly disappear? Is it worth paying to make sure that doesn't happen?

If you answer no, no, no, no and nah to those questions, or are just testing, I using [RawGit](https://rawgit.com/) to serve your element for free. Follow the instructions at their site and use the cdn link in your pym parent page.

The downside here is RawGit can only serve content that's in a GitHub repository so you will need to store the javascript and css files compiled for distribution in the same git repository as your source. Various people far more clever and sensible that I will tell you this is very, very naughty. They're dead right, but when you're testing at small scale the trade off is worth it. I recommend two things to RawGit less annoying. First, develop your element in a `dev` branch and merge your changes into master before building and committing the contents of the `dist` folder. Second, never commit the contents of the `dist` folder at the same times as changes to the source. Just do two separate commits.
