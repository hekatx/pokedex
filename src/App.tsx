import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { Providers } from "./providers";
import "./App.css";

function App() {
  return (
    <>
      <Providers>
        <RouterProvider router={appRouter} />
      </Providers>
    </>
  );
}

export default App;
