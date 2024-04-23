# graphic-designer-lite
An SVG Generator
## Description

The module 10 challenge was to create a simple svg graphic generator in node.js, that would take in three characters, a shape, and two color choices, and write the file into a folder. In addition to this, we needed to have javascript test files (this proved to be the hardest part of the module by far, finnicky at the very least and headache inducing at the most). It's a good lesson in reinforcing how exact you have to be when making a .toEqual comparison in the test files. It was also a good lesson in learning how to write into SVG, which I've never done before, and also how to refactor code, as I had to add in classes after the fact.

## Installation

The link works in node js, and it requires an npm installation of inquirer@8.2.4 and jest. It requires fs as well, which is preinstalled in node js.

## Usage

When you open the index.js file in your terminal, run node index.js and the first prompt will appear. Fill out all of the prompts as they appear, and your svg will render in the example folder. (fyi the example.svg is the example from the video capture, which also will feature the test run: https://drive.google.com/file/d/1dbre_-LwMyqrhbzLNWC5D_UJLDfOHCK9/view)

```md
![generated SVG](graphic-designer-lite/examples/logo.svg)
```

## Credits

A special shoutout to W3 schools, they have a nifty little window I could test out svgs with text in real time without having to endlessly run the command prompt in node. https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_circle1 And of course, Drew's speedrun helped double check my work, fleshing out my classes and adding validation for text input. https://zoom.us/rec/share/fUqfDf-UXztni9CiZIjDj2hZsJaJMm-s3K4hLOa0aQfnIFznWnGs-VH84y8X2wF_.I3iUgzRrFVCTXUpN

## License

The standard MIT license was used for this module.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/) 

## Tests

If you'd like to run the test javascript, input 'npm run test' in your node, and you should see 1 test suite passing as well as three individual tests. Screenshot to follow:

```md
![generated SVG](graphic-designer-lite/lib/images/Screenshot 2024-04-22 at 6.53.27 PM.png)
```

## Questions

If you have any further questions:

My Github is (https://github.com/jasongalas) 
My email is jasongalas@gmail.com

Thank you
