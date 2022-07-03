import React from "react";

function useQuery<T>(query: () => T) {
  const [data, setData] = React.useState<Awaited<T>>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const startExecution = (): void => {
      setError(null);
      setIsLoading(true);
    };

    const finishExecution = (error: any, data?: Awaited<T>): void => {
      setIsLoading(false);
      if (error) {
        return setError(error);
      }
      setData(data);
    };
    const execute = async () => {
      startExecution();
      try {
        const result = await query();
        finishExecution(null, result);
      } catch (error) {
        finishExecution(error);
      }
    };
    execute();
  }, [query]);

  return {
    isLoading,
    error,
    data,
  };
}

export default useQuery;
