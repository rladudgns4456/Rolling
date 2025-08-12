import ButtonBase from './ButtonBase';
import { ICON_SIZE } from './Tokens';

export default function IconButton({
  iconSrc, // URL로 import한 SVG
  alt = '',
  size = 24,
  variant = 'outlined',
  responsive = 'none', // 아이콘 버튼은 폭 고정 권장
  className = '',
  ...rest
}) {
  return (
    <ButtonBase
      size={size}
      variant={variant}
      responsive={responsive}
      className={className}
      {...rest}
    >
      <img
        src={iconSrc}
        alt={alt}
        className={`${ICON_SIZE[size]} shrink-0 align-middle`}
        aria-hidden={alt === ''}
      />
    </ButtonBase>
  );
}
