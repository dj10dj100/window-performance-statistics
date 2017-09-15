[![npm](https://img.shields.io/npm/dm/window-performance-statistics.svg)](https://www.npmjs.com/package/window-performance-statistics)
[![npm](https://img.shields.io/npm/dt/window-performance-statistics.svg)](https://www.npmjs.com/package/window-performance-statistics)
[![npm](https://img.shields.io/npm/v/window-performance-statistics.svg)](https://www.npmjs.com/package/window-performance-statistics)

### Window Performance Statistics

Small javascript package that converts the info in window.performance to usable metrics, useful for tracking page timing events. 

You may not need this package, but it's code that I've found myself reusing in several places - so thought I'd package it into something useful for others.

Package is designed for a `es2015+` environment so will need transpiling before use in older browsers.

Add this to your project by using `yarn add window-performance-statistics` or `npm install window-performance-statistics`;

```javascript
import { getTiming } from 'window-performance-statistics';
```


Can only call this method once the browser has finished loading from inside a 
```javascript
window.onload;
``` 
or 

```javascript
$(document).ready();
``` 

To use:

```javascript 
const timing = getTiming();
```

Gives you an object containing the following metrics
```javascript
{
    //page load
    pageComplete,

    //responseTime
    responseTime,

    //page render time
    domComplete,

    //dns lookup
    dns,

    //time to first byte
    ttfb,

    //time to interactive
    tti

}
```
