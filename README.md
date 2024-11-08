# Debugging and Learning Log

## React-Router-DOM

`<BrowserRouter>`
`<Routes>`
`<Route>`

It is convention to place render our '''<App>''' component inside our index.js. In order to use React-Router we must call <BrowserRouter> inside index.js.

I used to place my routes <Route>, which must be defined inside <BrowserRouter> and wrapped inside a single <Routes> element, inside the index.js because I thought that this place was the only overarching component we could place it in.

In the making of this project, I learned that we are in fact able to place our <Routes> inside the App.js. This means that there is no longer a need for our <Outlet> component.

In addition, we can nest <Route> inside other <Route> components. This may be helpful if your routes all have the same prefix path in common. In that case just make sure that the wrapper <Route> contains that common path and that at least one inside path is defined as default using the "index" attribute.

## Dependencies

npm i package_name --save-dev

First off, dependencies are any libraries we installed for our application to run. While developing I learned that we can use --save-dev to store our dependency under devDependencies in package.json file in order to flag it as a library only neccessesry during development process, but not needed during the production of the application.

## npm test

I began experimenting with test for jest to run to get the gist of making my own tests during production before deployment. By running `npm test` we are able to execute all files with the extension .test and thus run the function `test()`. `test()` will execute three things: (1) render the components to observe (2) define expected output (3) compare rendered object with expected object

NOTE: It is important for your dependencies to have a version of `@testing-library/react` inside package.json to be compatible with tests. It is also vital to wrap our components inside a `<BrowserRouter>` tag since it is also needed in our testing enviroment.
