// O'ZIMIZNING USUL
import styles from "./App.module.css";
import buttonStyle from './Button.module.css'
import Button from "./Button.js";
// ENG YOMON USULLI REEACTDAGI CSS

// const styles = {
//   color: "red",
//   fontSize: "16px", // not font-size: 16px;
// };

function App() {
  return (
      <div className={styles.container}>
        <Button className={buttonStyle.btn2}>Github</Button>
        <Button className={buttonStyle.btn1}>acc</Button>
        <Button>sotiladi!!!</Button>

      </div>
  );
}

export default App;
