export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyA4RzVQ5SXfExHEwo_0JAWZcn7q-rZxq7w",
    authDomain: "agroconnect-demo-8c7ab.firebaseapp.com",
    projectId: "agroconnect-demo-8c7ab",
    storageBucket: "agroconnect-demo-8c7ab.appspot.com",
    messagingSenderId: "617590434096",
    appId: "1:617590434096:web:9957e257ce9221b7bc00f5",
    measurementId: "G-004GHXNHG9"
  },
  baseURL: 'https://agro-connect-web-services.onrender.com/api/v1',

  //urls for the different endpoints
  userURL: '/users',
  authenticationURL: '/authentication',
  advisorURL: '/advisors',
  breederURL: '/breeders',
  resourceURL: '/resources',
  appointmentURL: '/appointments',
  expenseURL: '/expenses',
  notificationURL: '/notifications',
  publicationURL: '/publications',
  animalURL: '/animals',
  cageURL: '/cages',
  reviewURL: '/reviews',
  availableDateURL: '/available-dates'
}
