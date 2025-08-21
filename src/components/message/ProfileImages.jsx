const ProfileImages = ({
  profileImageURL,
  profileImages,
  setProfileImageURL,
}) => {
  return (
    <div className="flex gap-8 mobile:w-[320px] ">
      <div className="flex-shrink-0">
        <img
          src={profileImageURL || profileImages[0]}
          className="w-20 h-20 rounded-full"
          alt="선택된 프로필"
        />
      </div>
      <div>
        <h3 className="mb-1 whitespace-nowrap">
          프로필 이미지를 선택해주세요!
        </h3>
        <div className="flex mobile:flex-wrap">
          {profileImages.map(
            (src, index) =>
              src !==
                'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png' && (
                <img
                  key={index}
                  src={src}
                  alt="선택할 프로필 이미지"
                  onClick={() => setProfileImageURL(src)}
                  className="m-[1px] bg-white rounded-full cursor-pointer mobile:w-9 mobile:h-9 w-14 h-14"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileImages;
