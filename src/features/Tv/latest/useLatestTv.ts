import { AxiosError, AxiosResponse } from 'axios';
import { useQuery} from 'react-query';
import { latestApi } from '../../../apis/movieApi';
import { TVDetail } from '../../../types';

const useLatestTv = () => {
    return useQuery<AxiosResponse<TVDetail>, AxiosError>('latestTv', latestApi)
}

export default useLatestTv