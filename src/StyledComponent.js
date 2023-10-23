import {styles} from "./Styles";

const StyledComponent = () => {
    return (
        <div style={styles.Container}>
          <h2 style={styles.Header}>Sharing styles across many React components</h2>
          <div style={styles.LabelContainer}>
            <label style={styles.Label}>What needs to be done?</label>
          </div>
          <div style={styles.FormContainer}>
            <form>
              <input type="text" style={styles.InputStyle} />
              <button style={styles.ButtonStyle}>Add </button>
            </form>
          </div>
        </div>
      );
}


 
export default StyledComponent;