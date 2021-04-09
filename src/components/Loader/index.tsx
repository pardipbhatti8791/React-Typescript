const Loader: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 99999,
        top: "50%",
        left: "50%",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
