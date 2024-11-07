### Reac-Router-DOM

<BrowserRouter>
<Routes>
<Route>

It is convention to place render our <App> component inside our index.js. In order to use React-Router we must call <BrowserRouter> inside index.js.

I used to place my routes <Route>, which must be defined inside <BrowserRouter> and wrapped inside a single <Routes> element, inside the index.js because I thought that this place was the only overarching component we could place it in.

In the making of this project, I learned that we are in fact able to place our <Routes> inside the App.js. This means that there is no longer a need for our <Outlet> component.

In addition, we can nest <Route> inside other <Route> components. This may be helpful if your routes all have the same prefix path in common. In that case just make sure that the wrapper <Route> contains that common path and that at least one inside path is defined as default using the "index" attribute.

### Dependencies

npm i package_name --save-dev

First off, dependencies are any libraries we installed for our application to run. While developing I learned that we can use --save-dev to store our dependency under devDependencies in package.json file in order to flag it as a library only neccessesry during development process, but not needed during the production of the application.
