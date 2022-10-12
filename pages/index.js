import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counterSlice";
import { increment as incrementByContra } from "../redux/slices/contradictory";
import Alpha from "../components/Alpha";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const userName = useSelector((state) => state.counter.name);
  const alpha = useSelector((state) => state.alpha.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My name: {userName}</h1>
      <h1>
        Count: {count}\{alpha}
      </h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByContra());
        }}
      >
        Increment contra
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount({ value: 3, times: 8 }));
        }}
      >
        Increase by 3, 8 times
      </button>
      <hr />
      <Alpha />
    </div>
  );
}
