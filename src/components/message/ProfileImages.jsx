const DEFAULT_AVATAR =
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png';

const ProfileImages = ({
  profileImageURL,
  profileImages,
  setProfileImageURL,
}) => {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = DEFAULT_AVATAR;
  };
  return (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center flex-shrink-0">
        <img
          src={profileImageURL || DEFAULT_AVATAR}
          className="w-20 h-20 rounded-full"
          alt="선택된 프로필"
        />
      </div>
      <div>
        <h3 className="mb-3 font-normal whitespace-nowrap text-grayscale5">
          프로필 이미지를 선택해주세요!
        </h3>
        <div className="flex gap-1 mobile:flex-wrap">
          {profileImages.map(
            (url) =>
              url !== DEFAULT_AVATAR && (
                <label
                  key={url}
                  htmlFor={url}
                  className="relative inline-block overflow-hidden rounded-full cursor-pointer focus-within:ring-2 focus-within:ring-grayscale5 w-9 h-9 md:w-14 md:h-14"
                >
                  <input
                    type="radio"
                    id={url}
                    name="profileImage"
                    value={url}
                    checked={profileImageURL === url}
                    onChange={() => setProfileImageURL(url)}
                    className="sr-only"
                  />
                  <img
                    src={url}
                    alt="선택할 프로필 이미지"
                    className="object-cover w-full h-full"
                  />
                </label>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileImages;
