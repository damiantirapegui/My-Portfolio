import { useEffect, useState } from "react";
import "./Description.css";

export function Description() {
  const [description, setDescription] = useState("");

  const getDescription = async () => {
    const url = import.meta.env.VITE_URL;

    try {
      const response = await fetch(url); // Se till att rätt URL används
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      setDescription(data.description);
      return data;
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <article className="description-container">
      <div className="article-flexbox">
        <p className="description-text">{description}</p>
      </div>
    </article>
  );
}
