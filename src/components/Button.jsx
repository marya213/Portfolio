function Button(props) {
  return (
    <>
      <button className="text-rose-800	color: rgb(159 18 57);"> {props.children}({props.count})
      </button>
    </>
  );
}

export default Button;
