import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

export const genreMovieOptions = [
    { value: 'all', label: 'All' },
    { value: '28', label: 'Action' },
    { value: '16', label: 'Animations' },
    { value: '35', label: 'Comedy' },
    { value: '80', label: 'Crime' },
    { value: '99', label: 'Documentary' },
    { value: '18', label: 'Drama' },
    { value: '10751', label: 'Family' },
    { value: '14', label: 'Fantasy' },
    { value: '36', label: 'Histroy' },
    { value: '27', label: 'Horror' },
    { value: '10402', label: 'Music' },
    { value: '878', label: 'Sci-fi' },
    { value: '53', label: 'Thriler' },
    { value: '10752', label: 'War' },
  ];

  export const genreTvOptions = [
    { value: 'all', label: 'All' },
    { value: '10759', label: 'Action & Adventure' },
    { value: '16', label: 'Animations' },
    { value: '35', label: 'Comedy' },
    { value: '80', label: 'Crime' },
    { value: '99', label: 'Documentary' },
    { value: '18', label: 'Drama' },
    { value: '10751', label: 'Family' },
    { value: '9648', label: 'Mistery' },
    { value: '10763', label: 'News' },
    { value: '10764', label: 'Reality' },
    { value: '10765', label: 'Sci-fi & Fantasy' },
    { value: '10767', label: 'Talk' },
    { value: '10768', label: 'War & Politics' },
  ];

  export const filterOptions = [
    {value: 'popularity.desc', label: <div>Popularity <FaSortAmountDown /></div>},
    {value: 'popularity.asc', label: <div>Popularity <FaSortAmountUp /></div>},
    {value: 'primary_release_date.asc', label: <div>Date <FaSortAmountUp /></div>},
    {value: 'primary_release_date.desc', label: <div>Date <FaSortAmountDown /></div>},
    {value: 'vote_average.desc', label: <div>Rating <FaSortAmountDown /></div>},
    {value: 'vote_average.asc', label: <div>Rating <FaSortAmountUp /></div>}
  ]