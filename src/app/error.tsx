'use client';

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <div className="flex flex-col items-center justify-center">
    <div>oh no, something went wrong</div>
    <button onClick={() => { reset() }}>retry</button>
  </div>
}
