// selectors
export const getAll = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);


/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const updateTable = payload => ({ type: UPDATE_TABLE, payload })

export const fetchTables = () => {
  return (dispatch) => {
    return fetch("http://localhost:3131/api/tables")
      .then(res => res.json())
      .then(table => dispatch(updateTable(table)))
  }
}

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_TABLE:
      return [...action.payload]
    default:
      return statePart;
  }
}
