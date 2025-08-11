export default function Badge({ relation }) {
  const relationToStyle = {
    지인: 'bg-beige1 text-beige5',
    동료: 'bg-purple1 text-purple6',
    가족: 'bg-green1 text-green5',
    친구: 'bg-blue1 text-blue5',
  };

  const styles = relationToStyle[relation];
  return (
    <>
      <div
        className={`w-[41px] h-5 px-2 text-sm font-normal rounded ${styles}`}
      >
        {relation}
      </div>
    </>
  );
}
