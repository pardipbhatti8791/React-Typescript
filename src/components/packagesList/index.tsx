import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const repositories = useSelector((state) => state);
  const { searchRepositories } = useActions();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      searchRepositories(term)
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        <pre>{JSON.stringify(repositories, undefined, 2)}</pre>
      </div>
    </>
  );
};

export default PackagesList;
