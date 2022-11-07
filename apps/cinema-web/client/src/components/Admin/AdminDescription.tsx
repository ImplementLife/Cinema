import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IAdminDescriptionProps {
  value: string;
}

const AdminDescription: FC<IAdminDescriptionProps> = ({value}) => {

  const {setDesc} = createMovieSlice.actions
  const dispatch = useAppDispatch()


  const change = (e: string,) => {
    dispatch(setDesc(e))
  }

  return (
      <ReactQuill
          id='editor'
          style={{
            border:'none',
            color: "white",
            width: "100%",
            maxWidth: "900px",
          }}
          value={value}
          theme ='snow'
          onChange={change}
      />
  );
};

export default AdminDescription;
