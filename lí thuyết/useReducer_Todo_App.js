//1. Phân tích bài toán với useReducer làm TodoApp , lúc này truyền vào dispatch không phải là 1 hành động mà truyền vào đó là dữ liệu của người dùng nhập từ bàn phím.
//- initState
const initState = {
  job: "",
  jobs: [],
};
//- actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJobs = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

//- Reducer
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1); // xóa đi 1 phần tử trong mảng
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
};
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();

  const { job, jobs } = state;
  console.log(jobs);

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
