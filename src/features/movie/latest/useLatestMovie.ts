import { AxiosResponse ,AxiosError} from 'axios';
import {useQuery} from 'react-query';
import { latestApi } from '../../../apis/movieApi';
import { MovieDetail } from '../../../types';

const useLatestMovie = () => {
    return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latesMovie', latestApi)
}

export default useLatestMovie