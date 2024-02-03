import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";

export const genreOptions = [
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

  export const filterOptions = [
    {value: 'popularity.desc', label: <div>Popularity <FaSortAmountDown /></div>},
    {value: 'popularity.asc', label: <div>Popularity <FaSortAmountUp /></div>},
    {value: 'primary_release_date.asc', label: <div>Date <FaSortAmountUp /></div>},
    {value: 'primary_release_date.desc', label: <div>Date <FaSortAmountDown /></div>},
    {value: 'vote_average.desc', label: <div>Rating <FaSortAmountDown /></div>},
    {value: 'vote_average.asc', label: <div>Rating <FaSortAmountUp /></div>}
  ]