export default function Button({ children, className = '', ...rest }) {
  const base = 'inline-flex items-center justify-center py-3.5 px-6 rounded-xl';
  return (
    <button className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}
