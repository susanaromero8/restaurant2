import { Link } from "react-router-dom";

function Button({ description, className, url }) {
  return (
    <>
      <Link
        to={url}
        className={`cursor-pointer shadow-lg hover:shadow-black rounded-full text-center w-full	h-full font-bold p-4 ${className}`}
      >
        {description}
      </Link>
    </>
  );
}

export default Button;
