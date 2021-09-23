import { DELETE_COMMENT, GET_COMMENTS } from "../actions/comment.action";
import { EDDIT_COMMENT } from "../actions/comment.action";

const initialState = {};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;

    case EDDIT_COMMENT:
      return state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            content: action.payload.content,
          };
        } else return post;
      });

    case DELETE_COMMENT:
      return state.map((comment) => {
        if (comment.id === action.payload.comment.id) {
          return state.filter(
            (comment) => comment.id !== action.payload.commentId
          );
        } else return comment;
      });

    default:
      return state;
  }
}
