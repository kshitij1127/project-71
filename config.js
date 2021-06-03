import * as firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBwUnnexTOammWVo5_YCQrzTmpyrBdnPv4",
    authDomain: "story-hub-a39d0.firebaseapp.com",
    databaseURL: "https://story-hub-a39d0-default-rtdb.firebaseio.com",
    projectId: "story-hub-a39d0",
    storageBucket: "story-hub-a39d0.appspot.com",
    messagingSenderId: "979309958937",
    appId: "1:979309958937:web:a276ae0e450af158171788"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore()
 