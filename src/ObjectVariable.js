const ObjectVariable = () => {
    return (
      <div style={Container}>
        <h2 style={Header}>Style Object Variable in React</h2>
        <div style={LabelContainer}>
          <label style={Label}>What needs to be done?</label>
        </div>
        <div style={FormContainer}>
          <form>
            <input type="text" style={InputStyle} />
            <button style={ButtonStyle}>Add </button>
          </form>
        </div>
      </div>
    );
  };
  
  const Container = { display: "flex", flexDirection: "column" };
  const Header = { padding: "10px 20px", textAlign: "center", color: "#000" };
  const LabelContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const Label = { padding: "10px 20px", textAlign: "center", color: "blue" };
  const FormContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const InputStyle = {
    padding: "10px 20px",
    textAlign: "center",
    color: "blue",
    marginRight: "10px",
  };
  
  const ButtonStyle = {
    padding: "10px 20px",
    textAlign: "center",
    color: "blue",
  };
  
  export default ObjectVariable;
  