const ProfileImages = ({
  profileImageURL,
  profileImages,
  setProfileImageURL,
}) => {
  return (
    <>
      <div>
        <p className="mb-3 text-2xl font-bold text-grayscale9 whitespace-nowrap ">
          프로필 이미지
        </p>
        <img
          src={profileImageURL || profileImages[0]}
          className="w-20 h-20 rounded-full"
          alt="선택된 프로필"
        />
      </div>
      <div className="pt-[50px] mobile:pt-10">
        <p className="whitespace-nowrap">프로필 이미지를 선택해주세요!</p>
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
                  className="px-1 bg-white rounded-full cursor-pointer mobile:w-9 mobile:h-9 w-14 h-14"
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileImages;
