import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import PageLayout from "./Layout"; //Web Page Layout

export default function App() {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <PageLayout />
    </React.Suspense>
  );
}
