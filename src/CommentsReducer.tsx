import { commentDataTypes } from './CommentSection';

export interface CommentDataStateTypes {
  commentData: any[]
}

const initialState = {
  commentData: []
}

type Action = { type: "ADD_COMMENTLIST", payload: commentDataTypes[] }

export const CommentsReducer = (state: CommentDataStateTypes = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_COMMENTLIST": {
      return { commentData: [...state.commentData, ...action.payload] }
    }
    default:
      return state
  }
}