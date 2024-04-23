import Learn from "../assets/learn.png";
import { useState, useEffect } from "react";

const data = {
  category: ["Single", "Diwan", "Queen", "King", "Custom"],
  heights: ["6 in", "8 in", "10 in"],
  sizeUnits: ["in", "cm", "ft"],
  dimensions: [
    {
      dimension: '72" x 36"',
    },
    {
      dimension: '72" x 48"',
    },
    {
      dimension: '80" x 60"',
    },
    {
      dimension: '80" x 76"',
    },
    {
      dimension: "Custom Size",
    },
  ],
};

const Form = ({ price, setPrice, showForm, setShowForm, onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedHeight, setSelectedHeight] = useState("");
  const [selectedSizeUnit, setSelectedSizeUnit] = useState("");
  const [selectedDimension, setSelectedDimension] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); 

  useEffect(() => {
    let calculatedPrice = 15500; // Base price

    if (selectedCategory === "King") {
      calculatedPrice += 1000;
    }
    if (selectedHeight === "8 in") {
      calculatedPrice += 500;
    } else if (selectedHeight === "10 in") {
      calculatedPrice += 1000;
    }
    if (selectedSizeUnit === "cm") {
      calculatedPrice += 200;
    } else if (selectedSizeUnit === "ft") {
      calculatedPrice += 400;
    }
    if (selectedDimension === "Custom Size") {
      calculatedPrice += 1500;
    }

    setPrice(calculatedPrice);
  }, [selectedCategory, selectedHeight, selectedSizeUnit, selectedDimension, setPrice]);

    const handleSubmit = () => {
      onSubmit({
      category: selectedCategory,
      height: selectedHeight,
      sizeUnit: selectedSizeUnit,
      dimension: selectedDimension,
    });
    setFormSubmitted(true);
    setShowForm(!showForm);
  };

  if (formSubmitted) {
    return <div>Form submitted successfully!</div>;
  }

  return (
    <div className="form">
      <div className="head">
        <h3>Select Variants</h3>
      </div>
      <div>
        <img src={Learn} alt="learn" />
      </div>
      <div className="field-col">
        <div className="field">
          <label htmlFor="Category">Category</label>
          <div className="row" style={{ display: "flex", gap: "10px" }}>
            {data.category.map((item) => (
              <button
                key={item}
                className={`pill ${
                  selectedCategory === item ? "selected" : ""
                }`}
                onClick={() => setSelectedCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="height">Height</label>
          <div className="row" style={{ display: "flex", gap: "10px" }}>
            {data.heights.map((item) => (
              <button
                key={item}
                className={`pill ${selectedHeight === item ? "selected" : ""}`}
                onClick={() => setSelectedHeight(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="size">Size</label>
          <div className="row" style={{ display: "flex", gap: "10px" }}>
            {data.sizeUnits.map((item) => (
              <button
                key={item}
                className={`pill ${
                  selectedSizeUnit === item ? "selected" : ""
                }`}
                onClick={() => setSelectedSizeUnit(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="dimension">Dimension</label>
          <div className="row" style={{ display: "flex", gap: "10px" }}>
            {data.dimensions.map((item) => (
              <button
                key={item.dimension}
                className={`pill ${
                  selectedDimension === item.dimension ? "selected" : ""
                }`}
                onClick={() => setSelectedDimension(item.dimension)}
              >
                {item.dimension}
              </button>
            ))}
          </div>
        </div>
        <button className="btn" onClick={handleSubmit}>
          Confirm Variant
        </button>
      </div>
    </div>
  );
};

export default Form;
