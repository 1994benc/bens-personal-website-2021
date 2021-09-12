import type { NextPage } from "next";
import React from "react";
import About from "../common/components/about/About";
import BigBanner from "../common/components/bigBanner/BigBanner";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <div style={{ height: '80vh'}} id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
