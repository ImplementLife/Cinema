import { FC, useEffect, useState } from 'react';
import AdminDescription from '../../components/Admin/AdminDescription';
import AdminLyout from '../../components/Admin/re-use/AdminLyout';
import AdminFileInput from '../../components/Admin/AdminFileInput';
import AdminTextField from '../../components/Admin/re-use/AdminTextField';
import AdminDuration from '../../components/Admin/AdminDuration';
import { Button, Typography } from '@mui/material';
import {createMovieSlice} from '../../redux-toolkit/reducers/createMovieSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { adminAPI } from '../../services/AdminService';
import AdminTags from '../../components/Admin/AdminTags';
import AdminContainer from '../../components/Admin/re-use/AdminContainer';
import AdminBox from '../../components/Admin/re-use/AdminBox';
import AdminModal from '../../components/Admin/re-use/AdminModal';
import { useNavigate } from 'react-router-dom';

const SetupMoviePage: FC = () => {
  const movie = useAppSelector(state => state.createMovieSlice.movie)
  const newTag = useAppSelector(state => state.createMovieSlice.newTag)
  const isUpdate = useAppSelector(state => state.createMovieSlice.isUpdate)
  const {setName, setTrailer, addNewTag} = createMovieSlice.actions
  const [createMovie] = adminAPI.useCreateMovieMutation()
  const [updateMovie] = adminAPI.useUpdateMovieMutation()
  const [createTag] = adminAPI.useCreateTagMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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
    const formData = new FormData();
    if (movie.id === 0 && movie.imageFile !== null  ) {
      formData.append('image', movie.imageFile);
      formData.append('movie', JSON.stringify(movie));
      console.log(movie.imageFile);
      createMovie(formData);
    } else {
      if ( movie.imageFile !== null ) {
        formData.append('image', movie.imageFile);
      }
      formData.append('movie', JSON.stringify(movie));
      updateMovie(formData);
    }
  }

  const sendNewTag = () => {
    createTag(newTag)
    handleClose()
  }

  useEffect(() => {
    if(isUpdate === false) {
      navigate('/admin/movie')
    }
  }, [isUpdate, navigate])

  return (
    <AdminLyout>
      {
        isUpdate === false
        ? <Typography color='#ffffff80' variant="h5" gutterBottom>New movie</Typography>
        : <Typography color='#ffffff80' variant="h5" gutterBottom>Update movie: {movie.id}</Typography>
      }
      <AdminContainer>
        <AdminBox>
          <AdminTextField
            label='NAME'
            value={movie.name}
            setAction={changeName}
          />
          <AdminTextField
            label='TRAILER URL'
            value={movie.trailerURL}
            setAction={changeTrailer}
          />
        </AdminBox>
        <AdminBox>
          {movie.id === 0
            ?<AdminDuration/>
            :null
          }
          <AdminTags
            openModal={handleOpen}
          />
          <AdminModal
            status={modal}
            closeModal={handleClose}
          >
            <AdminTextField
              value={newTag.name}
              label='add new tag name...'
              setAction={changeNewTag}
            />
            <Button onClick={sendNewTag}>SEND</Button>
          </AdminModal>
        </AdminBox>
      </AdminContainer>
      <AdminBox>
        <AdminFileInput/>
        <AdminDescription value={movie.description}/>
      </AdminBox>
      <Button onClick={sendMovie} variant="contained">submit</Button>
    </AdminLyout>
  );
}
export default SetupMoviePage;
