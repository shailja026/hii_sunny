import React, { useState } from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

import sunny from "./sunny.jpg";
function Card() {
  const navigate = useNavigate()
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  ]);
  const home = () =>{
    navigate("/")
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bubbles}>
        {arr.map((el, ind) => (
          <span className={styles.span}></span>
        ))}
      </div>

      <div className={styles.abcd}>
        {/* <div className={styles.cardPhoto}>
          <div className={styles.imgbox}>
            <img className={styles.sunny} src={sunny} alt="" />
          </div>

          <div className={styles.contentBox}>
            <h2>keep Smiling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus vitae fugit enim repudiandae
            </p>
          </div>
        </div> */}
        <div className={styles.card}>
          <div className={styles.back}></div>
          <div className={styles.front}>
            <div className={styles.imgset}>
              {/* <img 
            
            
            src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png" alt=""
            /> */}
              <h1>
               
               
             
                <span style={{ marginLeft:"6em",marginTop:"3em" ,fontFamily: "initial" ,textAlign:"center"}}>
                  open me
                </span>
              </h1>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p id="head">Happy Birthday! to my Special one</p>
            <h5>@harshit</h5>
            <p>
              Sun Etni mehnat mai kise k liye ni krti , pyar s likhna chahti thi
              but achhe sbd ni aa rhe the , mai tujhe bs ye bolna chahti hu tu
              mere liye naaaa bhot jada special hai , I dont know in which form
              as a friend , as a partner or as a life partner 😃 maino tu
              chahiye bs (prapose ni kr rhi bsdk) , aur dhyan rkhiyo mujhe mai
              jitna pyar krti hu na usna hi presan v kr skti hu to thoda aur dr
              mujhse . well, well wishes. Happy Birthday 😘
            </p>
            <p>Hope Life always bless you with the best!</p>
          </div>
        </div>
      </div>
      <button onClick={home} className={styles.btn}>Go back</button>
    </div>
  );
}

export default Card;
