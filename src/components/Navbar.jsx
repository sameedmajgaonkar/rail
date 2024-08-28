import { FaTrainSubway } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar mb-12 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaTrainSubway className="inline pr-2 mx-2 text-3xl" />
          <Link to="/" className="text-lg align-middle font-bold">
            RailScout
          </Link>
        </div>
        <div className="flex-1 pr-2 mx-2">
          <div className="flex justify-end"></div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
