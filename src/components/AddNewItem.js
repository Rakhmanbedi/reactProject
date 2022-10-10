import React, { useState } from 'react';

const boxShadow = {
    boxShadow: 'none',
    WebkitBoxShadow: 'none'
};

const btnWidth = { width: '100%' };

const AddNewItem = (props) => {

    const { taskList, getList } = props;

    const [task, setTask] = useState('');

    const handleForm = (e) => {
        e.preventDefault();
        const trimUpdateTask = task.trim();
        if (trimUpdateTask !== '') {
            sessionStorage.setItem('taskList', JSON.stringify([trimUpdateTask, ...taskList]));
            getList();
            setTask('');
        }
    }

    const removeAllHandle = (e) => {

        e.preventDefault();
        sessionStorage.setItem('taskList', JSON.stringify([]));
        getList();
    }

    return (<>
        <div className="row">
            <div className="col-12">

                <form
                    className='form-group my-auto'
                    onSubmit={handleForm}
                >
                    <div className='row mb-3'>
                        <div className='col-12'>

                            <input
                                className='form-control text-center border'
                                style={boxShadow}
                                type="text"
                                value={task} onChange={(e) => setTask(e.target.value)}
                                maxLength='16'
                                placeholder='Write Here !!'
                                required
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="col-5 col-sm-4 p-0 mr-2">

                            <input
                                className='btn btn-light border addBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                type="submit"
                                value="Add Task"
                            />
                        </div>
                        <div className='col-5 col-sm-4 p-0'>

                            <button
                                className='btn btn-light border removeAllBtn'
                                style={{ ...boxShadow, ...btnWidth }}
                                onClick={removeAllHandle}
                            >Remove All</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <hr className='mb-2' />
    </>)
}

export default AddNewItem;