import React, { useState, useEffect } from "react";
import getCharacter from "../../api/fetchCharacter";
import { CharacterDataView } from "./CharacterDataView";
import { CharacterIdleView } from "./CharacterIdleView";
import { CharacterLoadingView } from "./CharacterLoadingView";
import { CharacterErrorView } from "./CharacterErrorView";

export const CharacterInfoCard = ({ submittedSearch, getStatus }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(submittedSearch ? "pending" : "idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    getStatus(status);
  }, [status, getStatus]);

  useEffect(() => {
    let _isMounted = true;

    if (!submittedSearch) {
      setStatus("idle");
      return;
    }
    setStatus("pending");
    setTimeout(() => {
      getCharacter(submittedSearch).then(
        (info) => {
          if (_isMounted) {
            setData(info);
            setStatus("resolved");
          }
        },
        (error) => {
          if (_isMounted) {
            setError(error);
            setStatus("rejected");
          }
        }
      );
    }, 2000);
    return () => {
      _isMounted = false;
    };
  }, [submittedSearch]);

  if (status === "resolved") {
    return <CharacterDataView data={data} />;
  } else if (status === "pending") {
    return <CharacterLoadingView />;
  } else if (status === "idle") {
    return <CharacterIdleView />;
  } else if (status === "rejected") {
    return <CharacterErrorView message={error.message} />;
  }
};
