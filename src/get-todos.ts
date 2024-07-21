export const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
};
