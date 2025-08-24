export default function CircleIconButton({
  iconSrc,
  alt = '',
  size = 32, // 32px 원형 버튼
  variant = 'outlined', // 'outlined' | 'dark'
  demo = 'none', // 'none' | 'hover' | 'pressed' | 'focus'
  disabled = false,
  className = '',
  ...rest
}) {
  const S =
    {
      32: 'w-8 h-8',
      40: 'w-10 h-10',
      56: 'w-14 h-14',
    }[size] || 'w-8 h-8';

  const base = `inline-flex items-center justify-center rounded-full border transition
                ${S} ${disabled ? 'cursor-not-allowed' : ''}`;

  const variants = {
    outlined:
      'bg-white text-black border-grayscale3 disabled:bg-grayscale2 disabled:text-grayscale5',
    dark: 'bg-grayscale9 text-white border-transparent disabled:bg-grayscale3 disabled:text-white',
  };

  const demos = {
    none: '',
    hover: variant === 'outlined' ? 'bg-grayscale1' : 'opacity-90',
    pressed: variant === 'outlined' ? 'bg-grayscale2' : 'opacity-80',
    focus: 'ring-2 ring-purple3 ring-offset-2 ring-offset-white',
  };

  const cls = [base, variants[variant], demos[demo], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={disabled} {...rest}>
      <img
        src={iconSrc}
        alt={alt}
        className={`${size >= 40 ? 'w-5 h-5' : 'w-4 h-4'}`}
        aria-hidden={alt === ''}
      />
    </button>
  );
}
