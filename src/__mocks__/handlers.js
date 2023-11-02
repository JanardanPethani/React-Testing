import { http, HttpResponse } from "msw";

export const postsData = [
  {
    createdAt: "2023-10-30T13:51:33.349Z",
    title: "PT1",
    data: "PD1",
    id: "1",
  },
  {
    createdAt: "2023-10-31T01:02:41.747Z",
    title: "PT2",
    data: "PD2",
    id: "2",
  },
];

export const handlers = [
  http.get("https://6540c19045bedb25bfc28795.mockapi.io/posts", () => {
    return HttpResponse.json([...postsData]);
  }),
];
