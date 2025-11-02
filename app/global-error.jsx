// ...existing code...
"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    //  log the error locally
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
// ...existing code...
