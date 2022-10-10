import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = (props) => {


    const { taskList, setSelectedTask, getList } = props;


    const selectHandle = (task, taskId) => {
        setSelectedTask({
            task: task,
            taskId: taskId
        });

        document.getElementById('update-row').classList.remove('d-none');
    }


    const deleteHandle = (task) => {

        const updatedTaskList = taskList.filter((value) => {
            return value !== task
        });
        sessionStorage.setItem('taskList', JSON.stringify(updatedTaskList));
        getList();
    }

    return (<>
        <div className='row mb-2'>
            <div
                className="col-12  overflow-auto"
                style={{ height: '300px' }}
            >

                <ul className='list-group list-group-flush'>
                    {

                        taskList.map((task, taskId) =>
                            <li
                                key={taskId}
                                className='list-group-item'
                            >

                                {task}

                                <span
                                    onClick={() => deleteHandle(task)}
                                    className='change-delete-icon float-right'
                                >

                                    <span className='delete-outline-icon'>
                                        <DeleteOutlineIcon />
                                    </span>
                                    <span className='delete-icon'>
                                        <DeleteIcon />
                                    </span>
                                </span>

                                <span
                                    onClick={() => selectHandle(task, taskId)}
                                    className='change-edit-icon float-right mr-2'
                                >

                                    <span className='edit-outlined-icon'>
                                        <EditOutlinedIcon />
                                    </span>
                                    <span className='edit-icon'>
                                        <EditIcon />
                                    </span>
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </>)
}

export default ItemList;