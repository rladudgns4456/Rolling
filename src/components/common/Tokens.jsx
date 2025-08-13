// 공통 토큰/유틸
export const BASE =
  'inline-flex items-center justify-center gap-2.5 transition-colors';

export const SIZES = {
  56: 'h-14 px-6 rounded-[12px]',
  40: 'h-10 px-4 rounded-[6px]',
  36: 'h-9  px-4 rounded-[6px]',
  28: 'h-7  px-3 rounded-[6px]',
  24: 'h-6  w-6 rounded-[4px]', // 정사각 아이콘 버튼
};

export const ICON_SIZE = {
  56: 'w-6 h-6',
  40: 'w-6 h-6',
  36: 'w-6 h-6',
  28: 'w-5 h-5',
  24: 'w-5 h-5', // 24px에서 또렷하게
};

export const LABEL_TYPO = {
  56: 'font-sans font-bold text-lg leading-7 tracking-[-0.01em]',
  40: 'font-sans font-regular text-sm leading-6 tracking-[-0.01em]',
  36: 'font-sans font-medium text-sm leading-5 tracking-[-0.01em]',
  28: 'font-sans font-regular text-xs leading-5 tracking-[-0.01em]',
};

export const VARIANTS = {
  primary: [
    'bg-purple6 text-white',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple3 ring-offset-white',
    'disabled:bg-grayscale3 disabled:border-none disabled:text-white disabled:cursor-not-allowed',
  ].join(' '),
  servePrimary: [
    'bg-purple6 text-white',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple3 ring-offset-white',
    'disabled:bg-grayscale3 disabled:border-none disabled:text-white disabled:cursor-not-allowed',
  ].join(' '),
  secondary: [
    'bg-white text-purple7 border border-purple7',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple3 ring-offset-white',
    'disabled:bg-grayscale3 disabled:border-none disabled:text-white disabled:cursor-not-allowed',
  ].join(' '),
  outlined: [
    'bg-white text-black border border-grayscale3',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple3 ring-offset-white',
    'disabled:bg-grayscale3 disabled:border-none disabled:text-white disabled:cursor-not-allowed',
  ].join(' '),
};

export function responsiveWidth(variant, size, mode = 'none') {
  const isOutlined56 = variant === 'outlined' && Number(size) === 56;
  const isSmall =
    variant === 'secondary' ||
    variant === 'servePrimary' ||
    (variant === 'outlined' && !isOutlined56);

  const hug = isSmall ? 'w-fit min-w-[122px]' : 'w-fit min-w-[208px]';

  switch (mode) {
    case 'none':
      return '';
    case 'hug':
      return hug;
    case 'default':
      return [
        'mobile:w-full',
        'tablet:w-fit pc:w-fit',
        isSmall
          ? 'tablet:min-w-[122px] pc:min-w-[122px]'
          : 'tablet:min-w-[208px] pc:min-w-[208px]',
      ].join(' ');
    default:
      return '';
  }
}

export const DEMO = {
  none: '',
  hover: '!bg-purple7',
  pressed: '!bg-purple8',
  focus: '!bg-purple8 ring-1 ring-purple9',
  secondary: '!bg-purple1',
  outlined: '!bg-grayscale1',
  outlinedFocus: '!ring-1 ring-grayscale5',
};
