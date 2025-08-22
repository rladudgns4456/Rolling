function ProfileImageSkeleton() {
  return (
    <div className="flex gap-5 mobile:w-[320px] ">
      <div>
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-grayscale4 animate-pulse">
          <span className="text-white"></span>
        </div>
      </div>
      <div className="flex items-center px-12 text-sm">
        <div className="flex mobile:flex-wrap animate-pulse">
          이미지 로딩중 ...
        </div>
      </div>
    </div>
  );
}

export default ProfileImageSkeleton;
