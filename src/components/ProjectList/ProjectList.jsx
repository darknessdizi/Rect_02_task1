export const ProjectList = (props) => {
  // Функциональный компонент отрисовывающий список проектов
  let id = 0;
  const result = {
    first: [],
    second: [],
    third: [],
  };
  const maxCount = Math.round(props.projects.length / 3);

  props.projects.map((obj) => {
    id += 1;
    if ((id > maxCount) && (id <= maxCount * 2)) {
      result.second.push(
        <img src={obj.img} alt="photo" className="item__project" key={`project-${id}`} />
      );
      return;
    }
    if (id <= maxCount) {
      result.first.push(
        <img src={obj.img} alt="photo" className="item__project" key={`project-${id}`} />
      );
      return;
    }
    return result.third.push(
      <img src={obj.img} alt="photo" className="item__project" key={`project-${id}`} />
    );
    
  });

  return (
    <>
    <div className="column">{ result.first }</div>
    <div className="column">{ result.second }</div>
    <div className="column">{ result.third }</div>
    </>
  )
}
