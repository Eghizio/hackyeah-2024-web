export const get = (url: string) => fetch(url).then((res) => res.json());

export const post = <T>(url: string, body: T) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
