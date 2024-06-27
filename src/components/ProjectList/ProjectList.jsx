export const ProjectList = (props) => {
  // Функциональный компонент отрисовывающий список проектов
  let id = 0;

  const result = props.projects.map((obj) => {
    id += 1;
    return <img src={obj.img} alt="photo" className="item__project" key={`project-${id}`} />;
  });

  return (
    <>
    { result }
    </>
  )
}
