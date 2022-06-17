import { useState } from 'react';



const ToggleBlog = ({BlogName}) => {


    const [open, setOpen] = useState({
        isOpen: false
    })

    const handleFormOpen = () => {
        setOpen({ isOpen: true });
    };
    const handleFormClose = () => {
        setOpen({ isOpen: false });
    };

    
//where is the toggle for add comment

    if (open.isOpen) {
        return (
            <FormComment
                _id={_id}
                setOpen={setOpen}
                onFormClose={handleFormClose}
                comment={comment}
                setComment={setComment}

            />
        );
    } else {
        return (
            <div className='toggleBlog'>
                <button
                    className='btn btn-primary'
                    onClick={handleFormOpen}
                >See More</button>
            </div>


        );
    }

}
export default ToggleBlog