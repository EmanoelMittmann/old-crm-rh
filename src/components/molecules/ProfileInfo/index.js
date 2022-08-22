import React from 'react';
import { ContainerProfileInfo } from './style';
import UserPhoto from '../../../components/atoms/UserPhoto';
import { IoIosExit } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

const ProfileInfo = ({ photo }) => {
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.clear();
    return history.push('/');
  };

  return (
    <ContainerProfileInfo>
      <IoIosExit onClick={handleSignOut} fontSize="23px" cursor="pointer" />
      <UserPhoto photo={photo} />
    </ContainerProfileInfo>
  );
};

export default ProfileInfo;
