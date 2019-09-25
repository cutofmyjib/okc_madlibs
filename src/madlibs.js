import {
  FIELD_NAMES,
} from "./constants";


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = "MADLIBS.SUBMIT_FIELD";
export const EDIT_ESSAY = "MADLIBS.EDIT_ESSAY";
export const START_OVER = "MADLIBS.START_OVER";
export const INCREMENT_COUNTER = "MADLIBS.INCREMENT_COUNTER";


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: "",
  showTextarea: false,
  showButton: false,
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const fieldAnswers = { 
        ...state.fieldAnswers,
        [action.payload.fieldName]: action.payload.answer
      };
      const fieldAnswersArr = Object.keys(fieldAnswers);
      const showButton = fieldAnswersArr.length === 4 && fieldAnswersArr.every(key => fieldAnswers[key].trim());

      return {
        ...state, 
        fieldAnswers,
        showButton
      };
    }

    case EDIT_ESSAY: {
      return {
        ...state,
        showTextarea: action.payload.showTextarea
      }
    }

    case START_OVER: {
      return {
        ...state,
        fieldAnswers: {},
        showTextarea: action.payload.showTextarea,
        showButton: false
      }
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}

export function editEssay({ isEditMode }) {
  return { type: EDIT_ESSAY, payload: { showTextarea: isEditMode } };
}

export function startOver({ isEditMode }) {
  return { type: START_OVER, payload: { showTextarea: isEditMode } };
}

