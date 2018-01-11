import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
	// care about action.payload.data
	switch (action.type) {
		case FETCH_WEATHER:
			// No!: return state.push(action.payload.data); -> mutation: 
			// need to return a new instance
			// return state.concat([action.payload.data]);
			// ES6 syntax
			return [ action.payload.data, ...state ];
	}
	return state;
}