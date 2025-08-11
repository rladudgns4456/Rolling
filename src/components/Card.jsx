import userProFile from '../assets/profile/Component_1.png';

function Card() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-6 gap-7">
        <article className="px-6 ">
          <div className="flex pb-4 gap-y-3.5 pt-7">
            <div className="profile-image">
              <img src={userProFile} alt=""></img>
            </div>
            <div className="card-title">
              <div className='flex'>
                From.
                <h3>김동훈</h3>
              </div>
              <div className="badge">동료</div>
            </div>
          </div>
          <div className="card-body">
            코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
            하세요!
          </div>
          <div className="card-footer">
            <span>2023.07.08</span>
          </div>
        </article>
      </div>
    </>
  );
}

export default Card;
