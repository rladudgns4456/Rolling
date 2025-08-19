function ProfileImageSkeleton() {
  return (
    <>
      {/* 대표 이미지 스켈레톤 */}
      <div>
        <p className="mb-3 text-2xl font-bold text-grayscale9 whitespace-nowrap">
          프로필 이미지
        </p>
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-grayscale4 animate-pulse">
          <span className="text-white"></span>
        </div>
      </div>
      {/* 선택 목록 스켈레톤 */}
      <div className="pt-[50px] mobile:pt-10 flex items-center text-sm">
        <div className="flex mobile:flex-wrap animate-pulse">
          이미지 로딩중 ...
        </div>
      </div>
    </>
  );
}

export default ProfileImageSkeleton;
