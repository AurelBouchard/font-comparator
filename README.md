# Font Comparer

Easy compare glyphs of different fonts.

![font recorder screen shot](user_guide/screen_shot.png "Font comparer")

Contents
========

* [1. Why?](#why)
* [2. Live demo](#demo)
* [3. Stack](#stack)
* [4. Setup](#setup)
* [5. Usage](#usage)
* [6. Upcoming changes](#upcoming)
* [7. Contact](#contact)
* [8. License](#license)

------------
<a name="why"></a>
## 1. Why?

One of my project led me to compare large lists of icons.

To harden the task, naming where totally different, even inside each file naming convention were ignored, and finally icons family were spread along files...

This tool allowed me to compare icon navigating along name (alphabetic order) or along content value.

<br />


<a name="demo"></a>
## 2. Live demo

![user search for a specific icon match between two fonts](user_guide/demo.gif "Font comparer Demo")


<br />


<a name="stack"></a>
## 3. Stack

- **Front-end** :
  * [*React*](https://reactjs.org "reactjs.org")


- **Dev tools** :
  * [*Vite*](https://vitejs.dev/ "vitejs.dev")
  * *autoprefixer* + *postcss* under the hood


<br />


<a name="setup"></a>
## 4. Setup
Clone the repo then

### Install:

    `yarn install`

### Make it run:

    `yarn vite`


<br />


<a name="usage"></a>
## 5. Usage

Navigation is along content value by default. Plus and minus button change the value to a hard coded list of available content values.

Click on glyph name to switch to navigation by name (alphabetic order). Plus and minus button select the next or previous glyph name in a hard coded list of glyph names.

Scroll over the +/- area to make fast changes.

Lists have to be extracted from icon/font correspondance css file.


<br />


<a name="upcoming"></a>
## 6. Upcoming changes

Fonts and css are hard coded, making the usage of several fonts quite hard.

File selection would be a good solution. But changing CSS after browser rendering is not relevant.

I think on using localStorage, default font and unexpected tricks to achieve this feature.


<br />


<a name="contact"></a>
## 7. Contact
Author : [AurelBouchard](mailto:au.bouchard@gmail.com)


<br />


<a name="licence"></a>
## 8. Licence
MIT

