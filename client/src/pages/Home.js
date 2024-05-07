import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [weightEntries, setWeightEntries] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/weight").then((response) => {
      setWeightEntries(response.data);
    });
  });
  return (
    
      <div className="weightCard">
        {weightEntries.map((value, key) => {
          return (
            <div
              key={key}
              className="weight"
              onClick={() => {
                navigate(`/weight/${value.id}`);
              }}
            >
              <div className="weightEntry">{value.weightEntry}kgs</div>
              <div className="date">{value.createdAt}</div>
            </div>
          );
        })}
      </div>
  );
}

export default Home;
