'use client';

import { getTodos } from '@/get-todos';
import { useSuspenseQuery } from '@tanstack/react-query';

export function Todos() {
  const { data } = useSuspenseQuery({ queryKey: ['todos'], queryFn: getTodos });

  return (
    <div>
      <ul>
        {data.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
