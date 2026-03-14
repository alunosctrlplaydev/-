import { useState } from "react";

function AddQuest(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddQuest = () => {
    if (inputValue.trim() !== "") {
      props.saveAddQuest(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="add-quest">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new quest"
      />
      <button onClick={handleAddQuest}>+</button>
    </div>
  );
} 

export default AddQuest;