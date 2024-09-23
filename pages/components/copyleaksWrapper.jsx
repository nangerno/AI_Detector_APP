import React, { useState } from "react";
import { PlasmicComponent } from "@plasmicapp/loader-react";

const CopyleaksWrapper = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const checkWriterDetection = async () => {
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint and logic
      const response = await fetch(
        "https://api.copyleaks.com/v2/writer-detector/check",
        {
          method: "POST",
          headers: {
            Authorization: "af41a052-0443-4d5a-a435-37328968ce60",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PlasmicComponent
        component="TargetText"
        componentProps={{
          textarea: {
            value: text,
            onChange: handleTextChange,
          },
          button: {
            onClick: checkWriterDetection,
          },
        }}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {result && (
        <div>
          {/* Display the result here */}
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CopyleaksWrapper;
