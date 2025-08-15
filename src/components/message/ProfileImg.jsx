import React from 'react';
import { getProfileImg } from '../../utils/PROFILE_IMGS.JS';

const ProfileImg = () => {
  return (
    <img
      className="px-1 bg-white rounded-full mobile:w-9 mobile:h-9 w-14 h-14"
      src={getProfileImg}
    />
  );
};

export default ProfileImg;
