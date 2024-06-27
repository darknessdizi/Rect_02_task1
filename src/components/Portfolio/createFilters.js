export function createFilters(array) {
  // Создает список фильтров
  const result = ['All'];
  for (let i = 0; i < array.length; i += 1) {
    const item = result.find((el) => el === array[i].category);
    if (item === undefined) {
      result.push(array[i].category);
    }
  }
  return result;
}

export function findProject(array, filter = 'All') {
  // Возвращает список проектов
  if (filter === 'All') {
    return array; 
  } else {
    return array.filter((el) => el.category === filter);
  }
}
