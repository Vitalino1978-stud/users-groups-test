import PageHeading from '../PageHeading/PageHeading';
import style from "./Welcome.module.css";

export default function Welcome() {
  return (
    <>
      <PageHeading text="Welcome to my test task" />
      <p className={style.text}>Hope you will like my creation </p>
      <span className={style.emoji}>&#128526;</span>
    </>
  );
}