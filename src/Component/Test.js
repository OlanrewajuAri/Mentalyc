import React, { useState, useEffect } from "react";
import Trash from "../Images/Trash.svg";
import {
  StyledList,
  StyledListHeader,
  StyledListRow,
  StyledListCell,
  StyledListCell1,
  StyledDeleteButton,
  Progress,
  ProgressBar,
  UploadTask,
  UploadLength,
  UploadLengthP,
} from "./MyStyles/Test";

function Test() {
  const [noteType, setNoteType] = useState("");
  const [clientName, setClientName] = useState("");
  const [uploadEnabled, setUploadEnabled] = useState(false);
  const [uploadTasks, setUploadTasks] = useState([]);
  const [progressingTasks, setProgressingTasks] = useState([]);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const handleNoteTypeChange = (e) => {
    setNoteType(e.target.value);
    setUploadEnabled(clientName.trim() !== "" && e.target.value !== "");
  };

  const handleClientNameChange = (e) => {
    setClientName(e.target.value);
    setUploadEnabled(noteType !== "" && e.target.value.trim() !== "");
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const task = {
      id: new Date().getTime(),
      noteType,
      clientName,
      // file,
      status: "pending",
      progress: 0,
    };
    setUploadTasks([...uploadTasks, task]);
    setProgressingTasks([...progressingTasks, task]);
    setNoteType("");
    setClientName("");
    setUploadEnabled(false);
  };

  const updateProgress = (taskId, progress) => {
    const updatedTasks = progressingTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          progress,
        };
      } else {
        return task;
      }
    });
    setProgressingTasks(updatedTasks);
    // setUploadTasks(updatedTasks);
    localStorage.setItem("progressData", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("progressData");
    if (storedData) {
      setUploadTasks(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("progressData", JSON.stringify(uploadTasks));
  }, [uploadTasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("uploadTasks");
    if (storedTasks) {
      setProgressingTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadTasks", JSON.stringify(progressingTasks));
  }, [progressingTasks]);

  useEffect(() => {
    const interval = setInterval(() => {
      setUploadTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((prevTask) => {
          const taskId = prevTask.id;
          const progress = prevTask.progress;
          if (prevTask.status !== "completed") {
            if (progress === 30) {
              return { ...prevTask, status: "completed" };
            }
            updateProgress(taskId, progress + 1);
            return { ...prevTask, progress: progress + 1 };
          }
          return prevTask;
        });
        return updatedTasks;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedProgressingTasks = progressingTasks.filter(
      (task) => task.id !== taskId
    );
    setProgressingTasks(updatedProgressingTasks);

    const uploadedTask = uploadTasks.find((task) => task.id === taskId);
    if (uploadedTask) {
      const updatedUploadedTasks = uploadTasks.filter(
        (task) => task.id !== taskId
      );
      setUploadTasks(updatedUploadedTasks);
    }
  };

  const handleDelete = () => {
    setIsDeleteClicked(true);
  };

  return (
    <div>
      <h3>Upload your session's recordings</h3>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#uploadModal"
      >
        Upload
      </button>
      <div className="modal fade" id="uploadModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Complete Your Upload</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleUpload}>
                <select value={noteType} onChange={handleNoteTypeChange}>
                  <option value="">Note Type</option>
                  <option value="progress">Progress Note</option>
                  <option value="document">Document</option>
                  <option value="presentation">Presentation</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter client name"
                  value={clientName}
                  onChange={handleClientNameChange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!uploadEnabled}
                onClick={handleUpload}
              >
                Finish Upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <UploadTask>
        <UploadLength>{uploadTasks.length}</UploadLength>
        <UploadLengthP>Notes in progress</UploadLengthP>
      </UploadTask>
      {uploadTasks.length > 0 && (
      <StyledList>
        <StyledListHeader>
          <StyledListCell1 width="30%">Client</StyledListCell1>
          <StyledListCell1 width="30%">Type</StyledListCell1>
          <StyledListCell1 width="30%">ETA</StyledListCell1>
          <StyledListCell1 width="10%" align="right">
            &nbsp;
          </StyledListCell1>
        </StyledListHeader>
        {uploadTasks.map((task, index) => (
          <StyledListRow key={task.id} index={index}>
            <StyledListCell width="30%">{task.clientName}</StyledListCell>
            <StyledListCell width="30%">{task.noteType}</StyledListCell>
            <StyledListCell width="30%">
              <Progress>
                <ProgressBar
                  role="progressbar"
                  style={{ width: `${task.progress}%` }}
                  aria-valuenow={task.progress}
                  aria-valuemin="0"
                  aria-valuemax="30"
                 
                  
                >
                  {/* {task.progress}% */}
                </ProgressBar>
              </Progress>
            </StyledListCell>
            <StyledListCell width="10%" align="right">
              <StyledDeleteButton onClick={() => handleDeleteTask(task.id)}>
                <img src={Trash} alt="" />
              </StyledDeleteButton>
            </StyledListCell>
          </StyledListRow>
        ))}
      </StyledList>
      )}
    </div>
  );
}

export default Test;
