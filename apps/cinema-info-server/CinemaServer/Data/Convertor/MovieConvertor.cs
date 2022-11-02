﻿using CinemaServer.Data.DTO;
using CinemaServer.Data.DTO.InterfaceDTO;
using CinemaServer.Entities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;

namespace CinemaServer.Data.Convertor
{
    public class MovieConvertor : IBaseConvertor<Movie, DTOMainInfoMovie>
    {
        public Movie Convert(DTOMainInfoMovie dto)
        {
           Movie movie = dto;
            return movie;           
        }

        public DTOMainInfoMovie Convert(Movie movie)
        {            
            DTOMainInfoMovie dTOMovie = new();
            dTOMovie.Id = movie.Id;
            dTOMovie.Name = movie.Name;
            dTOMovie.NameImg = movie.NameImg;           
            return dTOMovie;
        }
        public List<Movie> ConvertToList(List<DTOMainInfoMovie> dtolist)
        {
            List<Movie> movielist = new(dtolist);
            return movielist;
        }

        public List<DTOMainInfoMovie> ConvertToList(List<Movie> movielist)
        {
            List<DTOMainInfoMovie> dTOMovielist = new();
            DTOMainInfoMovie dTOMovie = new();
            foreach (Movie movie in movielist)
            {
                dTOMovie.Id = movie.Id;
                dTOMovie.Name = movie.Name;
                dTOMovie.NameImg = movie.NameImg;
                dTOMovielist.Add(dTOMovie);
            }            
            return dTOMovielist;
        }
    }
}
