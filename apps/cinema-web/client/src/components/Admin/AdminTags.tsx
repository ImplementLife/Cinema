import React, { FC, SyntheticEvent } from 'react';
import { Autocomplete, AutocompleteChangeReason, Button, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { createMovieSlice } from '../../redux-toolkit/reducers/createMovieSlice';
import { ITagDTO } from '../../models/MovieDTO';
import { adminAPI } from '../../services/AdminService';

interface IAdminTags {
  openModal: () => void;
}

const AdminTags: FC<IAdminTags> = ({openModal}) => {
  const movieTags = useAppSelector(state => state.createMovieSlice.movie.tags)
  const {data: tags} = adminAPI.useGetAllTagsQuery('')
  const dispatch = useAppDispatch()
  const {setTags} = createMovieSlice.actions

  const onChange = (event: SyntheticEvent<Element, Event>, value: ITagDTO[], reason: AutocompleteChangeReason,) => {
    reason = 'selectOption'
    dispatch(setTags(value))
  }

  return (
    <>
      {
      tags&& 
      <Autocomplete
          multiple
          id="tags-filled"
          style={{width: '100%', maxWidth: 404}}
          onChange={onChange}
          value={movieTags}
          options={tags}
          getOptionLabel={options => options.name}
          renderOption={(props, option) => 
              <li {...props} key={option.id}>
                {option.name}
              </li>
              }
          noOptionsText={
            <Button 
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={openModal}
            >Create new...</Button>
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tags"
              placeholder="add"
            />
          )}
        />
      }
    </>
  );
};

export default AdminTags;
