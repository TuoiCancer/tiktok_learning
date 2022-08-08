import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { setJob, addJobs, deleteJob } from "./action";
import logger from "./logger";

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const inputRef = useRef();

  const { job, jobs } = state;

  const handleSubmit = () => {
    dispatch(addJobs(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 32 }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="enter todo..."
        onChange={(e) => {
          // e.target.value
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <span
                onClick={() => {
                  dispatch(deleteJob(job));
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
