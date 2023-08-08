import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAAfbXrx0_-aRVhK04kRJffznIjshCjGX4",
  authDomain: "auth-c5c54.firebaseapp.com",
  projectId: "auth-c5c54",
  storageBucket: "auth-c5c54.appspot.com",
  messagingSenderId: "924640051939",
  appId: "1:924640051939:web:fd504b01ca504e71d43bd6",
  measurementId: "G-D6ZL1V0WD1"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);