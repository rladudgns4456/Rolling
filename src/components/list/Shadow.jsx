import beige from '../../assets/images/beige.svg';
import blue from '../../assets/images/blue.svg';
import green from '../../assets/images/green.svg';
import purple from '../../assets/images/purple.svg';

const SHADOW_IMAGES = { purple, beige, blue, green };

export default function Shadow({ color }) {
  const src = SHADOW_IMAGES[color];
  return (
    <>
      <img
        src={src}
        className="mobile:w-[107.4px] top-[117px] z-10 pc:left-[132px] tablet:left-[132px] mobile:left-[100.6px] 
        absolute mobile:rounded-br-[16px] tablet:rounded-br-[16px] pc:rounded-br-[16px]"
      />
    </>
  );
}
