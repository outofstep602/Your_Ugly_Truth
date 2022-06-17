import{useState, useEffect}from 'react'
import FormComment from '../FormComment/FormComment'

const ToggleComment = ({ _id, comment, setComment, blogList, setBlogList, userImage }) => {
  
  const [open, setOpen]= useState({
    isOpen:false
  })
  
  const handleFormOpen = () => {
    setOpen({ isOpen: true });
  };
  const handleFormClose = () => {
    setOpen({ isOpen: false });
  };


  if (open.isOpen) {
    return (
      <FormComment 
        _id={_id}       
        setOpen={setOpen}
        onFormClose={handleFormClose}         
        comment={comment}
        setComment={setComment}
        blogList={blogList}                                    
        setBlogList={setBlogList} 
        userImage={userImage}           
        />
    );
  } else {
    return (
      <div className='comment-button'>
        <button
          className='btn btn-primary'
          onClick={handleFormOpen}
        >Add Comment
  
          </button>
      </div>
    );
  }

}

export default ToggleComment

