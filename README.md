# crown-clothing-store-graphql-apollo
### Complete E-Commerce app created using React, Redux, Stripe API, Firebase/Firestorm
#### Live version: https://sps-crown-clothing-live.herokuapp.com/ (v2.2 of the app)

## v2.2 (this app)
### This is following the version v1.0, and will use GraphQL and Apollo to reach for the data.
#### https://github.com/alvarosps/crown-clothing-store-graphql-apollo
* Replacing most of Context API/Redux Sagas with GraphQL/Apollo (only left Directory Context because of not having Sections in the GraphQL Playground)
* Mobile responsive styles added
* Added React Lazy, Suspense to improve performance
* Create ErrorBoundary component to show error page if anything goes wrong in the components
* Using React.memo to improve performance
* Added compression to express server for Heroku Deployment

## v2.1
### This is following the version v1.0, but it has Context API replacing all of Redux in the app.
#### https://github.com/alvarosps/crown-clothing-store-hooks
* Replaces Redux with Context API, and uses React Hooks instead of State
* Created backend for the Stripe payments

## v2.0
### This is following the version v1.0, and will include Async React(Redux Thunk), Container Pattern, Redux Saga
#### https://github.com/alvarosps/crown-clothing-store-async-redux
* Added Redux Sagas to handle async redux in the app
* Collections Data coming from Firestorm
* Created backend for the Stripe payments

## v1.0
### This version of the app contains the base of the code, using
#### https://github.com/alvarosps/crown-clothing-store-redux
* Create-react-app
* React router (basic and advanced)
* Firebase authentication (Google, Email, Sign up features)
* Redux (synchronous)
* Session Storage and Persistence
* Stripe Payments API
* Styled Components
* Firestorm database
* Created HOC WithSpinner for loading state
