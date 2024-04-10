export default function Random(props) {
  const { text, number, found, trivia } = props.fact;
  return (
    <div className="flex items-center gap-2 rounded bg-lime-200 p-7">
      <div className="rounded-md bg-lime-400 p-6 text-xl drop-shadow-md">
        {number}
      </div>
      <div className="text-base  text-green-900 ">{text}</div>
    </div>
  );
}
