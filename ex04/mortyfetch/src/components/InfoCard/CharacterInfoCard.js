import React, { useState, useEffect } from "react";
import { CharacterImage } from "./CharacterImage";
import getCharacter from "../../api/fetchCharacter";
import { CharacterDataView } from "./CharacterDataView";
import { CharacterIdleView } from "./CharacterIdleView";

export const CharacterInfoCard = ({ submittedSearch }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(submittedSearch ? "loading" : "idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!submittedSearch) {
      setStatus("idle");
      return;
    }
    setStatus("loading");
    getCharacter(submittedSearch).then((info) => {
      setData(info);
      setStatus("resolved");
    });
  }, [submittedSearch]);

  if (status === "resolved") {
    return <CharacterDataView data={data} />;
  } else {
    return <CharacterIdleView />;
  }
};
