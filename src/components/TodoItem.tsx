import { ITodo } from "../types/data"

interface ITodoItem extends ITodo {}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, completed} = props;

    return (
        <div>
            <input type="checkbox"  checked={completed}/>
            {" " + title + " "}
            <button className="" > DEL </button>
        </div>)
}

export { TodoItem }