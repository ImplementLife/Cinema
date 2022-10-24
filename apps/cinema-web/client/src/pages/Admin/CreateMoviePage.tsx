import { FC, useState } from 'react';
import AdminDescription from '../../components/Admin/AdminDescription';
import AdminLyout from '../../components/Admin/re-use/AdminLyout';
import AdminFileInput from '../../components/Admin/AdminFileInput';
import AdminTextField from '../../components/Admin/re-use/AdminTextField';
import AdminDuration from '../../components/Admin/AdminDuration';
import { Button } from '@mui/material';
import {createMovieSlice} from '../../redux-toolkit/reducers/createMovieSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { adminAPI } from '../../services/AdminService';
import AdminTags from '../../components/Admin/AdminTags';
import AdminBox from '../../components/Admin/re-use/AdminBox';
import AdminModal from '../../components/Admin/re-use/AdminModal';
import { ITagDTO } from '../../models/MovieDTO';

const CreateMoviePage: FC = () => {
  const movie = useAppSelector(state => state.createMovieSlice.movie)
  const newTag = useAppSelector(state => state.createMovieSlice.newTag)
  const dispatch = useAppDispatch()
  const {setName, setTrailer, addNewTag} = createMovieSlice.actions
  const [createMovie] = adminAPI.useCreateMovieMutation()
  const [createTag] = adminAPI.useCreateTagMutation()

  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const changeName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    dispatch(setName(e.target.value))
  }
  const changeTrailer = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    dispatch(setTrailer(e.target.value))
  }
  const changeNewTag = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(addNewTag(e.target.value))
  }

  const sendMovie = () => {
    if (movie.imageFile !== null) {
      const formData = new FormData();
      formData.append('image', movie.imageFile);
      formData.append('movie', JSON.stringify(movie));
      console.log(formData);
      createMovie(formData);
    }
  }

  const sendNewTag = () => {
    const obj: ITagDTO = {
      name: newTag,
      id: 0
    }
    createTag(obj)
    handleClose()
  }

  return (
    <AdminLyout>
      <AdminBox>
        <AdminTextField
          label='NAME'
          setAction={changeName}
        />
        <AdminTextField
          label='TRAILER URL'
          setAction={changeTrailer}
        />
        <AdminTags
          openModal={handleOpen}
        />
        <AdminModal
          status={modal}
          closeModal={handleClose}
        >
          <AdminTextField
            label='add new tag name...'
            setAction={changeNewTag}
          />
          <Button onClick={sendNewTag}>SEND</Button>
        </AdminModal>

        <AdminDuration/>
        <AdminFileInput/>

      </AdminBox>
      <AdminBox>
        <AdminDescription/>
        <Button onClick={sendMovie} variant="contained">submit</Button>
      </AdminBox>
    </AdminLyout>
  );
}
export default CreateMoviePage;
