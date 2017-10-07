
[![npm](https://img.shields.io/npm/dm/window-performance-statistics.svg)]()
[![npm](https://img.shields.io/npm/dt/window-performance-statistics.svg)]()
[![npm](https://img.shields.io/npm/v/window-performance-statistics.svg)]()

### <a href="https://www.npmjs.com/package/window-performance-statistics">Window Performance Statistics </a>

Small javascript package that converts the information found  in window.performance api to usable metrics, useful for tracking page timing events. 

You may not need this package, but it's code that I've found myself reusing in several places - so thought I'd package it into something useful for others.

Package is designed for a `es2015+` environment so will need transpiling before use in older browsers.

Add this to your project by using `yarn add window-performance-statistics` or `npm install window-performance-statistics`;

```javascript
import { getTiming } from 'window-performance-statistics';
```


Can only call this method once the browser has finished loading from inside a 
```javascript
window.onload = function () { 
    const timings = getTiming();
};
//OR for jQuery friends
$(document).ready(() =>{
    const timings = getTiming();
});

``` 


# Methods
## <a name="getTiming()">getTiming()</a>

**Parameters**

**{`time`} string | null**
```javascript 
getTiming('seconds')
```
Pass in seconds for all results to be returned in human readable seconds. Default is null, milliseconds.

**Returns -> Timing Response**

**Timing Response Properties**

| Name | Type | Description |
| --- | --- | --- |
| pageComplete | <code>number</code> | {`time`} Page load time, from initial request => complete |
| responseTime | <code>number</code> | {`time`} Server response time |
| domComplete | <code>number</code> | {`time`} Time from response to domComplete firing |
| dns | <code>number</code> | {`time`} DNS lookup timing |
| ttfb | <code>number</code> | {`time`} Time to first byte |
| tti | <code>number</code> | {`time`} Time took for DOM to be interactive |


Example:
```javascript 
const timing = getTiming();
```
Response:

![alt Output][OP]

[OP]: response.png "Response from timing getTiming()"


