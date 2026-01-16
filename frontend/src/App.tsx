import { useEffect } from "react";
import pingServer from "./services/pingService";
import "./App.css";

function App() {
  useEffect(() => {
    async function ping() {
      try {
        const result = await pingServer();
        console.log("✅ Server responded successfully:", result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("❌ Failed to ping server:", error.message);
        }
      }
    }

    ping();
  }, []);

  return <h1>Tilasijoittelujärjestelmä</h1>;
}

export default App;
