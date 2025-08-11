import { Children } from 'react';
import userProFile from '../assets/profile/Component_1.png';

function Card() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-6 gap-7">
        <article className="px-6 bg-white rounded-2xl drop-shadow-md">
          <CardHeader />
          <CardBodyView />
          <div className="pb-6 text-xs text-grayscale4">
            <span>2023.07.08</span>
          </div>
        </article>
      </div>
    </>
  );
}

function CardHeader() {
  return (
    <>
      <div className="flex pb-4 gap-x-3.5 pt-7 border-b border-grayscale2">
        <div className="overflow-hidden rounded-full h-14 w-14">
          <img className='w-full h-full' src={userProFile} alt=""></img>
        </div>
        <div className="flex flex-col gap-y-1.5">
          <div className="flex gap-x-1.5">
            From.
            <h3 className='font-bold'>김동훈</h3>
          </div>
         <Badge Children={'동료'} />
        </div>
        <Button />
      </div>
    </>
  );
}

function CardBodyView() {
  return (
    <>
      <div className="my-4 text-lg text-grayscale6 line-clamp-3">
        코로나가 또다시 기승을 부리는 요즘이네요.
        <br />
        건강, 체력 모두 조심 또 하세요!
        <br />
        코로나가 또다시 기승을 부리는 요즘이네요.
      </div>
    </>
  );
}

function Badge({Children}){
  return(
    <>
     <div className="px-2 w-fit">{Children}</div>
    </>
  )
}

function Button(){
  return(
    <>
    <button className="w-10 h-10 ml-auto border rounded-md border-grayscale3">버튼</button>
    </>
  )
}

export default Card;
