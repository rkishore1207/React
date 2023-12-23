# TypeScript
## What is TypeScript
* It is the perfect ordered that is giving **discipline** to javascript file and was developed by **Microsoft**.
* <mark>Typescripts are build on top of javascript</mark>.
* All javascript files are valid typescript files.
* Typescript helps to develop more robust and maintainable application in a less time.
* Benefits
    * Static Typing
    * Code Completion
    * Refactoring
    * Shorthand notation
### Static Typing
* Javascript is the **dynamic language** that is variable datatype is detemined during the **code execution**.
* This is one of the drawbacks of javascript, for example 
```javascript
let number = "Kishore";
Math.Random(number);
//This will show error during run time or else we have to write testcases for identify the bug.
```
* So, to achieve this, typescript is completely based on **static type**.
* **Drawbacks** is Compilation, -> browser only understands javascript, hence with the help of compiler we can convert typescript into javascript.
* So, compilation took more time.
    * Medium to large Application-> `Typescript`
    * Small Application -> `Javascript`
### Install Typescript compiler from NPM
* `npm i -g typescript`
* `tsc -v` (typescript compiler)
## Configure Typescript compiler
```javascript
-> "target":"ES2016" //determine which javascript version this compiler will going to give.
// we could change this by ctrl + space
-> "rootDir":"./src" //all our typescript files should be in the src folder
-> "outDir":"./dist" //all the output javascript files are come under dist folder
-> "removeComments":"true" //it will remove all the comments which we wrote in the typescript
-> "noEmitOnError":"true" //if any error in the typescript it won't compile it into javascript
```
