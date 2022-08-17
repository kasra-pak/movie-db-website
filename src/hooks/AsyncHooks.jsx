import { useCallback, useState } from "react";

function useAsync() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(
    promise => {
      if (!promise || !promise.then) {
        throw new Error(
          "The argument passed to useAsync().run must be a promise."
        );
      }

      setStatus("pending");
      promise
        .then(result => {
          setData(result);
          setStatus("resolved");
        })
        .catch(() => {
          setData(null);
          setStatus("rejected");
        });
    },
    [setData, setStatus]
  );

  return {
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",
    data,
    run,
  };
}

export default useAsync;
