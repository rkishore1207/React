# STORY BOOK
### What?
&nbsp;&nbsp; It is Playground for UI components and it runs outside of the main react components and we need to worry about the dependencies and libraries in the react that won’t affect the story points and it is isolated development environments.
### Why?
* We can easily view the different components used in the react applications and know the different props that are used in the react components.
* And we can get the feedback from stakeholders by showing this UI and dynamically changing the props that is if we change one props to another, we can show to the client from frontend itself not go to the source code and he can easily understand what’s going on.
### Introduction
* To install StoryBook -> `npx sb init`
* Story book is the collection of Stories and story maintains vision state of the components
### Hierarchy (Groups)
* To create group between stories, just put forward slash before `Title` at which ever story we want in that same group.
```javascript
title:'Form/Button'
```
* To create group within group is also a simple task
```javascript
title:'Form/Control/Input Fields'
```
* To sort the stories alphabetically is by inserting sorting commands in the `Preview file`.
```javascript
options: {
    storySort: (a, b) =>
    a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
},
```


