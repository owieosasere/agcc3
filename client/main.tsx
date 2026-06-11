import "./global.css";

import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container not found");
}

// Check if root already exists to prevent duplicate createRoot calls during HMR
const existingRoot = (container as any)._reactRoot;

if (existingRoot) {
  existingRoot.render(<App />);
} else {
  const root = createRoot(container);
  root.render(<App />);
}
