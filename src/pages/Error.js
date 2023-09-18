import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className='section'>
      <h2>404 Error</h2>
      <Link to="/">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
