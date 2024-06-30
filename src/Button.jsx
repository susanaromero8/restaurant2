import { Link } from "react-router-dom";

function Button({ description, className, url }) {
  return (
    <>
      <div>
        <Link
          to={url}
          className={`cursor-pointer shadow-lg hover:shadow-black rounded-full w-full	h-full font-bold p-4 ${className}`}
        >
          {description}
        </Link>
      </div>
    </>
  );
}

export default Button;
