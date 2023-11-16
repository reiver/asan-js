# asan.js

**asan.js** is a **convention-over-configuration** style **model-view** system for web-sites and web-applications.

The attaction of using **asan** is that the location of the **model** for a path is very straight-forward.

For example, the **model** for a path "`/an/example/path`" would be at "`/src/an/example/path`".
I.e., a "`/src`" prefix is added to the current path to get the **model**.

Since **asan** is **convention-over-configuration**, it takes care of all this for you.
**asan** infers what the current path is.
(Ex: "`/apple/banana/cherry.html`".)
And then **asan** calculates the path of the **model** (based of the current path).
(Ex: "`/src/apple/banana/cherry.html`".)
And then includes that.
You just have to tel it _where_ to include it.

## Example

Here is an example usage of **asan.js**:

```html
<!DOCTYPE html>
<html>
	<body>
		<div id="main"></div>
		<script type="module">
		import * as asan from "./asan.js" // <--- Your path of asan.js might be different.

		// In this example code, we are going to tell asan to include the view under the element with id="main".
		// In your code you could do something else.
		const element = document.getElementById("main")

		asan.include(element)
		</script>
	</body>
</html>
```

## Import

To import module **asan** use `import` code like the following:
```javascript
import * as asan from "./asan.js" // <--- Your path of asan.js might be different.
```

## Author

Module **asan** was written by [Charles Iliya Krempeaux](http://changelog.ca)
