import React from "react";

function useQuery<T>(
  query: (payload?: any) => T,
  payload?: any,
  refresh?: boolean
) {
  const [data, setData] = React.useState<Awaited<T>>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (refresh || refresh === undefined) {
      const startExecution = (): void => {
        setError(null);
        setIsLoading(true);
      };

      const finishExecution = (error: any, apiData?: Awaited<T>): void => {
        setIsLoading(false);
        if (error) {
          return setError(error);
        }
        setData(apiData);
      };
      const execute = async () => {
        startExecution();
        try {
          const result = payload ? await query() : await query(payload);
          finishExecution(null, result);
        } catch (error) {
          finishExecution(error);
        }
      };
      execute();
    }
  }, [refresh]);

  return {
    isLoading,
    error,
    data,
  };
}

export default useQuery;
