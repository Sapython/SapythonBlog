import { initializeApp } from "firebase/app";
import {
  getMessaging,
  onMessage,
  onBackgroundMessage,
} from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDcBtiZKm1UQmBx40EMY0wweMIxUXXmB8g",
  authDomain: "sapython-f016a.firebaseapp.com",
  databaseURL: "https://sapython-f016a-default-rtdb.firebaseio.com",
  projectId: "sapython-f016a",
  storageBucket: "sapython-f016a.appspot.com",
  messagingSenderId: "796109016505",
  appId: "1:796109016505:web:071d0ecf3d25f5ad8afa68",
  measurementId: "G-9HWLXLES8L",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});
onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
