export const Toolbar = (props) => {
  // Функциональный компонент отрисовывающий список фильтров
  let id = 0;

  const result = props.filters.map((title) => {
    id += 1;
    if (title === props.selected) {
      return <div className="button__filter active" key={`toolbar-${id}`} onClick={props.onSelectedFilter}>{title}</div>;
    } else {
      return <div className="button__filter" key={`toolbar-${id}`} onClick={props.onSelectedFilter}>{title}</div>;
    }
  })

  return (
    <>
    { result }
    </>
  )
}
