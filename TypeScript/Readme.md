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
## Typescript built-in datatypes
![Typescript datatypes](https://github.com/rkishore1207/React/assets/146698138/23ad7cba-0b35-4b39-8b82-5dcedd84b7cf)

* In typescript, if we didn't specify the variable type also it will assign **respected type** from the value.
```javascript
let array:number[] = [1,2,3];
//we could not specify more than one data types here in typescript
```
```javascript
let tuple:[number,string] = [2,"Kishore"];
//exactly same order and same data types should be there
```
* `enums` having list of constants with some values, with enums we could make the application `maintainable and readable`.
* Enums should be written as **Pascal Case** in typescript, initially the values for members are 0,1,...
* But if we assign anything it will vary accordingly.
* If we assign string to it, we should give string to everything.
### Functions in Typescript
* Arguments we are passing is **less or more** when compare with parameters in the function, then it will show error but javascript won't show error.
## Module Formats
* Depending upon the **module formats** that we set in the configuration, our exporting statements will be differ.
* In **Common Js**, everything will be exporting by a `exports` objects and export object having **properties of functions** in the file.
## Default exports
* Only one module wanna export from the class, then use **default** module.
* Don't need to use **curly braces** in the importing file also.
## WildCard Import
* With the `*` character we would store every functionalities in one container.
## Re-Exporting
* If one component having lot of module to be export, then we would make that as a different files and import everything in one common file and export there itself.
* Then wherever we want we can consume the common export.
