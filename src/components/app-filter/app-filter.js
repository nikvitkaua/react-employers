import './app-filter.css';

const AppFilter = (props) => {
  const btnsData = [
    {name: 'all', label: "Все сотрудники"},
    {name: 'rise', label: "На повышение"},
    {name: 'moreThen1000', label: "З/п больше 1000$"}
  ];

  const buttons = btnsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button 
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;