import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://69b08941c63dd197febc804c.mockapi.io/' }),
  tagTypes: ['Todo'],
  endpoints: (build) => ({
    fetchTodos: build.query({
      query: () => `tasks`,
      providesTags: ['Todo'],
    }),
    deleteTodo: build.mutation({
      query: (todoId) => ({
        url: `tasks/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    createTodo: build.mutation({
      query: (text) => ({
        url: 'tasks',
        method: 'POST',
        body: { text },
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useFetchTodosQuery, useDeleteTodoMutation, useCreateTodoMutation } = todoApi;
