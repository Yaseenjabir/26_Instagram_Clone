import SingleInbox from "../../SingleInbox";
import { data } from "../assets/MessagesData";
const Primary = () => {
  return (
    <>
      <div className="flex-1 px-5 flex flex-col gap-4 py-3 overflow-y-scroll">
        {data.map((item, index) => (
          <SingleInbox key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Primary;
