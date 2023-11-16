# asan.js

**asan.js** is a **convention-over-configuration** model-view system for web-sites and web-applications.

The attaction of using **asan** is that the location of the **model** for a path is very straight-forward

For example, the **model** for a path "`/an/example/path`" would be at "`/src/an/example/path`".
I.e., a "`/src`" prefix is added to the current path to get the **model**.

## Example

Here is an example usage of **asan.js**:

```html
<!DOCTYPE html>
<html>
	<body>
		<div id="main"></div>
		<script type="module">
		import * as asan from "./asan.js" // <--- Your path of asan.js might be different.

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
