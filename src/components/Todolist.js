import React, { useEffect, useState } from 'react';
import Header from './Header';
import AddNewItem from './AddNewItem';
import ItemList from './ItemList';
import UpdateInput from './UpdateInput';

const Todolist = () => {


    const [taskList, setTaskList] = useState(['Dates', 'Coconuts', 'Bananas', 'Apples']);


    const getList = () => setTaskList(JSON.parse(sessionStorage.getItem('taskList')));

    useEffect(() => {

        const getTaskList = JSON.parse(sessionStorage.getItem('taskList'));


        if (getTaskList) {
            setTaskList(getTaskList);
        } else {
            sessionStorage.setItem('taskList', JSON.stringify(taskList));
        }

    }, [])


    const [selectedTask, setSelectedTask] = useState({
        task: '',
        taskId: null
    });

    return (<>
        <div className='container position-relative'>
            <div
                className='row'
                style={{
                    height: '100vh',
                    zIndex: '1'
                }}
            >
                <div className='col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4
                    mx-auto my-auto border rounded shadow'>

                    <Header />

                    <AddNewItem
                        taskList={taskList}
                        getList={getList}
                    />

                    <ItemList
                        taskList={taskList}
                        setSelectedTask={setSelectedTask}
                        getList={getList}
                    />
                </div>
            </div>

            <UpdateInput
                taskList={taskList}
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
                getList={getList}
            />
        </div>
    </>)
}

export default Todolist;