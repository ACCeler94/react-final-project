import { API_URL } from '../config';

// selectors
export const getAll = ({ tables }) => tables;
export const getTableById = ({ tables }, id) => tables.find(table => table.id === id);


/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_TABLE_DATA = createActionName('SET_TABLE_DATA')
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const setTable = payload => ({ type: SET_TABLE_DATA, payload })
export const updateTable = (id, payload) => ({ type: UPDATE_TABLE, id, payload });

export const fetchTables = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(table => dispatch(setTable(table)));
  }
}

export const fetchUpdateTable = (id, changedValuesObj) => {
  return (dispatch) => {
    return fetch(`${API_URL}/tables/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(changedValuesObj)
    }).then(dispatch(updateTable(id, changedValuesObj)))
  }
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_TABLE_DATA:
      return [...action.payload]
    case UPDATE_TABLE:
      return statePart.map(table => {
        if (table.id === action.id) {
          return { ...table, ...action.payload };
        } else {
          return table;
        }
      });
    default:
      return statePart;
  }
}
