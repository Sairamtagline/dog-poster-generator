import { useDispatch } from 'react-redux';

const useCustomDispatch = () => {
  const dispatch = useDispatch();
  const cusDispatch = (params: any) => {
    dispatch(params);
  };
  return { cusDispatch };
};

export default useCustomDispatch;
