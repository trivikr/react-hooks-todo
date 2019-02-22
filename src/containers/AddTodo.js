import { connect } from "react-redux";
import { addTodo } from "../actions";
import AddTodoForm from "../components/AddTodoForm";

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
