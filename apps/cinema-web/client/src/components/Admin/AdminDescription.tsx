import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IAdminDescriptionProps {
}

const AdminDescription: FC<IAdminDescriptionProps> = () => {

  const {setDesc} = createMovieSlice.actions
  const dispatch = useAppDispatch()


  const change = (e: string,) => {
    dispatch(setDesc(e))
  }

  return (
      <ReactQuill
          id='editor'
          style={{
            background: "#252531",
            color: "white",
            width: "100%",
            maxWidth: "800px",
        }}
          theme='snow'
          onChange={change}
      />
  );
};

export default AdminDescription;
