import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://69b08941c63dd197febc804c.mockapi.io/' }),
  endpoints: (build) => ({
    fetchTodos: build.query({
      query: () => `tasks`,
    }),
    deleteTodo: build.mutation({
      query: (todoId) => ({
        url: `tasks/${todoId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchTodosQuery, useDeleteTodoMutation } = todoApi;
