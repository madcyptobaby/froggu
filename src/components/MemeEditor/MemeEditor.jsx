import { useEffect, useState } from "react";

const MemeEditor = () => {
  const [Draggable, setDraggable] = useState(null);

  useEffect(() => {
    // Import dynamically only in the browser
    import("react-draggable").then((mod) => {
      setDraggable(() => mod.default);
    });
  }, []);

  if (!Draggable) {
    return <p>Loading editor...</p>; // fallback UI
  }

  return (
    <Draggable>
      <div className="p-4 bg-yellow-200 rounded shadow">wow</div>
    </Draggable>
  );
};

export default MemeEditor;
