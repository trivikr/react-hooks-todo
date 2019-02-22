import { connect } from "react-redux";
import { addTodo } from "../actions";
import AddTodoForm from "../components/AddTodoForm";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (todo: string) => dispatch(addTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
