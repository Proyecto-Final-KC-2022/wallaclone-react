import { useEffect, useState } from "react";

export default function usePagination<T>(
  apiQuery: (payload: any) => T,
  payload: any,
  pageNumber?: number,
  refreshData?: boolean
) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Awaited<T> | Array<any>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [refreshData]);

  useEffect(() => {
    const startExecution = (): void => {
      setError(null);
      setIsLoading(true);
    };

    const finishExecution = (error: any, apiData?: Awaited<T>): void => {
      setIsLoading(false);
      if (error) {
        return setError(error);
      }
      setData((prevData) => [
        ...(prevData as Array<T>),
        ...(apiData as Array<T>),
      ]);
      setHasMore((apiData as Array<T>).length >= payload?.queryParams?.limit);
      setIsLoading(false);
    };
    const execute = async () => {
      startExecution();
      try {
        const result = await apiQuery(payload);
        finishExecution(null, result);
      } catch (error) {
        finishExecution(error);
      }
    };

    execute();
  }, [payload, pageNumber]);
  return {
    isLoading,
    error,
    data,
    hasMore,
  };
  //   axios({
  //     method: "GET",
  //     url: "http://openlibrary.org/search.json",
  //     params: { q: query, page: pageNumber },
  //     cancelToken: new axios.CancelToken((c) => (cancel = c)),
  //   })
  //     .then((res) => {
  //       setData((prevBooks) => {
  //         return [
  //           ...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)]),
  //         ];
  //       });
  //       setHasMore(res.data.docs.length > 0);
  //       setIsLoading(false);
  //     })
  //     .catch((e) => {
  //       if (axios.isCancel(e)) return;
  //       setError(true);
  //     });
  //
  //     return () => cancel();
  //   }, [query, pageNumber]);

  //   return { loading, error, books, hasMore };
}
