import React from "react";
import { createRoot } from "react-dom/client";
import AppContextProvider from "./context/context";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import MainPage from "./components/pages/MainPage/MainPage";
import FontFaceObserver from "fontfaceobserver";

function App() {
  return <MainPage />;
}

const logError = (error: Error) => {
  console.error("Unexpected error: ", error);
};

const primaryFontObserver = new FontFaceObserver("Rubik Vinyl");
const secondaryFontObserver = new FontFaceObserver("Nunito");

function AppWithProvider() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={logError}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ErrorBoundary>
  );
}

export default AppWithProvider;

Promise.all([primaryFontObserver.load(), secondaryFontObserver.load()]).then(
  () => {
    createRoot(document.getElementById("root")!).render(<AppWithProvider />);
  }
);
