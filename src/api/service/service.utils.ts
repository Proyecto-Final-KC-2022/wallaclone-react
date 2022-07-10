export function getQueryParams(query: any): string {
  let url = "";
  if (query) {
    url = "?";
    for (const [key, value] of Object.entries(query)) {
      if (value && value !== "null" && value !== "undefined") {
        url = url + `${key}=${value}&`;
      }
    }
  }
  return url;
}

export function getUrlParams(urlParams: any): string {
  let url = "";
  if (urlParams) {
    for (const value of Object.values(urlParams)) {
      if (value !== null && value !== undefined) {
        url = `${url}/${value}`;
      }
    }
  }
  return url;
}
