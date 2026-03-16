import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://69b08941c63dd197febc804c.mockapi.io/' }),
  endpoints: (build) => ({
    fetchTodos: build.query({
      query: () => `tasks`,
    }),
    createTodo: build.mutation({
      query: (newTodo) => ({
        url: `tasks`,
        method: 'POST',
        body: newTodo,
      }),
    }),
  }),
});

export const { useFetchTodosQuery } = todoApi;
