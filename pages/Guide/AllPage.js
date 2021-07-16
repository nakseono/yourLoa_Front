import React, { useState, useCallback } from "react";
import { Card } from "antd";

import WarriorPage from "./GuidePages/Warrior/WarriorPage";
import MagicianPage from "./GuidePages/Magician/MagicianPage";
import HunterPage from "./GuidePages/Hunter/HunterPage";
import FighterPage from "./GuidePages/Fighter/FighterPage";
import AssasinPage from "./GuidePages/Assasin/AssasinPage";

const AllPage = () => {
  const [isWarrior, setWarriorPage] = useState(false);
  const [isMagician, setMagicianPage] = useState(false);
  const [isHunter, setHunterPage] = useState(false);
  const [isFighter, setFighterPage] = useState(false);
  const [isAssasin, setAssasinPage] = useState(false);

  const clearState = useCallback(() => {
    setWarriorPage(false);
    setMagicianPage(false);
    setHunterPage(false);
    setFighterPage(false);
    setAssasinPage(false);
  }, []);

  const clickWarrior = () => {
    clearState();
    setWarriorPage(true);
  };
  const clickMagician = () => {
    clearState();
    setMagicianPage(true);
  };
  const clickHunter = () => {
    clearState();
    setHunterPage(true);
  };
  const clickFighter = () => {
    clearState();
    setFighterPage(true);
  };
  const clickAssasin = () => {
    clearState();
    setAssasinPage(true);
  };

  return (
    <>
      <Card
        title="전 클래스"
        headStyle={{ display: "flex", justifyContent: "center" }}
        style={{ border: "0.5px solid", marginTop: "2rem" }}
      >
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickWarrior}
        >
          <div>전사</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickMagician}
        >
          <div>마법사</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickHunter}
        >
          <div>헌터</div>
        </Card.Grid>
        <Card.Grid
          style={{
            width: "20%",
            borderRight: "solid 0.5px",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={clickFighter}
        >
          <div>무도가</div>
        </Card.Grid>
        <Card.Grid
          style={{ width: "20%", justifyContent: "center", display: "flex" }}
          onClick={clickAssasin}
        >
          <div>암살자</div>
        </Card.Grid>
      </Card>
      {isWarrior ? <WarriorPage /> : <></>}
      {isMagician ? <MagicianPage /> : <></>}
      {isHunter ? <HunterPage /> : <></>}
      {isFighter ? <FighterPage /> : <></>}
      {isAssasin ? <AssasinPage /> : <></>}
    </>
  );
};

export default AllPage;
