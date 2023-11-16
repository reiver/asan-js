/*
Copyright (c) 2023 Charles Iliya Krempeaux :: http://changelog.ca/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


// The page that this script is loaded into is called the 'destination'.
// Which is shortened to "dst" in the code.
//
// Elsewhere, at a different path, there is a 'source'.
// Which is shortern to "src" in the code.
//
// The 'dst' has a path. For example, it might be:
//
//	/topic/apple/banana/cherry
//
// The page of the 'src' is based on the path of the 'dst'.
// For the example 'dst' path the corresponding 'src' path is:
//
//	/src/topic/apple/banana/cherry
//
// I.e., the corresponding 'src' path has a "/src" prefix.
//
// This JavaScript code looks at the path of the 'dst' and calculates the path of the 'src'.
// It then fetches the HTML from the 'src' path.
// It then includes the HTML it fetched from the 'src' path here into the 'dst'.
// It then sets the title of the page to the inner-text for the first <h1> from the 'src'.
export function include(element) {
	console.log("[asan][include] begin")

	if (undefined === element) {
		console.log("[asan][include] element is undefined")
		console.log("[asan][include] end")
		return
	}

	let dst = window.location.pathname
	let src = "/src" + dst

	console.log("[asan][include] dst-path: ", dst)
	console.log("[asan][include] src-path: ", src)

	fetch(src).
	then( response => {
		if (!response.ok) {
			element.innerHTML = '<article><h1>Not Found</h1></article>'
			throw new Error('network response was not ok')
		}

		console.log("[asan][include] src found")
		return response.text()
	}).
	then( text => {
		element.innerHTML = text

		return text
	}).
	then( () => {

		// Set the title of the page to the value of the first <h1> (if there is an <h1>).

		const h1s = element.getElementsByTagName("h1")
		if (undefined === h1s || element.length <= 0) {
			return
		}
		const h1 = h1s[0]

		const titles = document.getElementsByTagName("title")
		if (undefined === titles || titles.length <= 0) {
			return
		}
		const title = titles[0]

		const titleText = h1.innerText
		console.log("[dst] title-text: ", titleText)
		title.innerText = titleText

	});

	console.log("[asan][include] end")
}
