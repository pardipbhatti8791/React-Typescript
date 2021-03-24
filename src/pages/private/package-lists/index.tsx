import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const PackagesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const { searchRepositories } = useActions();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>{loading ? "Searching..." : "Search"}</button>
      </form>
      <div>
        {!error &&
          !loading &&
          data.map((p) => {
            return <div key={p}>{p}</div>;
          })}
      </div>
      <div>{error && <h1>{error}</h1>}</div>
    </>
  );
};

export default PackagesList;
