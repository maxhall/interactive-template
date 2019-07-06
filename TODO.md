Improvements to make to this template, in rough order of priority:

* Add source maps for JS and SCSS
* Improve error handling so simple syntax problems don't crash gulp
* Add test page that embeds the interactive to check that your PYM.js and resizing works correctly
* Clean up the console logging in the Gulp file
* Improve example files
* Add basic testing implementation to encourage testing. This will probably require dev/prod build flags
* With each commit commit an automatically generated rap sheet that contains page load, page weight etc, so you have a complete history of your elements performance. This could be a csv that the scripts adds a line to each time
* Switch NPM for Yarn
* Add NPM scripts for watch and build
