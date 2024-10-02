import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Provider } from "react-redux";
import { Store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js", { scope: "/" })
//     .then((registration) => {
//       console.log("Service Worker registered with scope:", registration.scope);
//     })
//     .catch((error) => {
//       console.error("Error registering Service Worker:", error);
//     });
// }
root.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <div id="recaptcha-container"></div>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 1500,
        }}
      />
    </PersistGate>
  </Provider>
);
reportWebVitals();
