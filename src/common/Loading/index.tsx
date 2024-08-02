'use client'

import { Flex, Spin } from 'antd';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '@/redux/store';
import './styles.css'
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Loading = () => {
  const isLoading = useTypedSelector((state) => state.loadingReducer.value.isLoading);
  if (!isLoading) return null;

  return (
    <>
      <Flex align="center" gap="middle">
        <Spin fullscreen className='custom-spin' />
      </Flex>
    </>
  );
};

export default Loading;