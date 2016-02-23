# The `src` Directory

## Overview

The `src/` directory contains all code used in the application along with all
tests of such code.

```
src/
  |- app/
  |  |- about/
  |  |- home/
  |  |- app.js
  |  |- app.spec.js
  |- assets/
  |- common/
  |  |- plusOne/
  |- sass.scss
  |- index.html
```

- `src/app/` - application-specific code, i.e. code not likely to be reused in
  another application. [Read more &raquo;](app/README.md)
- `src/assets/` - static files like fonts and images that are copied over during build / compile 
- `src/common/` - third-party libraries or components likely to be reused in
  another application. [Read more &raquo;](common/README.md)
- `src/sass.scss` - Main SASS CSS file which imports all other files.
- `src/index.html` - this is the HTML document of the single-page application.
  See below.

See each directory for a detailed explanation.

## `index.html`

The `index.html` file is the HTML document of the single-page application (SPA)
that should contain all markup that applies to everything in the app, such as
the header and footer. It declares with `ngApp` that this is `ngBoilerplate`,
specifies the main `AppCtrl` controller, and contains the `ngView` directive
into which route templates are placed.

Unlike any other HTML document (e.g. the templates), `index.html` is compiled as
a Grunt template, so variables from `Gruntfile.js` and `package.json` can be
referenced from within it. Changing `name` in `package.json` from
"ng-boilerplate" will rename the resultant CSS and JavaScript placed in `build/`,
so this HTML references them by variable for convenience.
