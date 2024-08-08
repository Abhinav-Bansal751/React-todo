export default function TodoCard (props) {
    const {children,deletetodo,index,edittodo} = props;
    return (
    <li className="todoItem">
            {children}
        <div className="actionsContainer">
                <button onClick={() =>  {
                    edittodo(index)
                }}>
                     <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button onClick={() => {
                         deletetodo(index)
                        }}>
                     <i className="fa-solid fa-trash" ></i>

                </button>
            </div>
    </li>
)}