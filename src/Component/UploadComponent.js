import React, { useState, useEffect } from "react";
import Trash from "../Images/Trash.svg";

import {
  UploadComponentH3,
  ButtonUpload,
  ButtonP,
  ModalContent,
  ModalHeader,
  ModalH5,
  Modalp,
  ModalBody,
  ModalFooter,
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
} from "./MyStyles/UploadComponents";

function UploadComponent() {
  const [noteType, setNoteType] = useState("");
  const [clientName, setClientName] = useState("");
  const [uploadEnabled, setUploadEnabled] = useState(false);
  // const [uploadTasks, setUploadTasks] = useState(
  // []
  // );
  const [uploadTasks, setUploadTasks] = useState(
    JSON.parse(localStorage.getItem("uploadTasks")) || []
  );
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
      status: "pending",
      progress: 0,
    };

    setUploadTasks([...uploadTasks, task]);
    setProgressingTasks([...progressingTasks, task]);
    setNoteType("");
    setClientName("");
    setUploadEnabled(false);

    localStorage.setItem("uploadTasks", JSON.stringify([...uploadTasks, task]));

    // Close the modal
    const modal = document.getElementById("exampleModal");
    modal.classList.remove("show");
    modal.style.display = "none";
    const modalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
    modalBackdrop.parentNode.removeChild(modalBackdrop);
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
    // window.localStorage.setItem("uploadTasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    localStorage.setItem("uploadTasks", JSON.stringify(uploadTasks));
  }, [uploadTasks]);

  useEffect(() => {
    const storedData = localStorage.getItem("uploadTasks");

    if (storedData) {
      // setUploadTasks(JSON.parse(storedData));
      const parsedData = JSON.parse(storedData);
      setUploadTasks(parsedData.filter(task => task.status !== "completed"));
    }
  }, []);

  // update progress of progressing tasks

  useEffect(() => {
    const interval = setInterval(() => {
      setUploadTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((prevTask) => {
          const taskId = prevTask.id;
          const progress = prevTask.progress;
          if (prevTask.status !== "completed") {
            if (progress === 100) {
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
      if (uploadedTask.progress !== 100) {
        const updatedUploadedTasks = uploadTasks.filter(
          (task) => task.id !== taskId
        );
        setUploadTasks(updatedUploadedTasks);
      }
    }
  };
  

  const handleDelete = () => {
    setIsDeleteClicked(true);
  };

  return (
    <div>
      <UploadComponentH3>Upload your session’s recordings</UploadComponentH3>
      {/* Button trigger modal  */}
      <ButtonUpload
        type="button"
        class="btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <ButtonP>Upload</ButtonP>
      </ButtonUpload>

      {/* Modal  */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <ModalContent>
            {/* Modal Title */}
            <ModalHeader>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </ModalHeader>
            <ModalH5>Complete Your Upload</ModalH5>
            <Modalp>Fill in the details below to complete your upload</Modalp>
            {/* Modal Body */}

            <ModalBody>
              <form onSubmit={handleUpload}>
                <select
                  name="noteType"
                  value={noteType}
                  onChange={handleNoteTypeChange}
                >
                  <option value=""> Select a note type</option>
                  <option value="Progress note">Progress note - 80 left</option>
                  <option value="Soap note">Soap note - 80 left</option>
                  <option value="EMDR note">EMDR note- 80 left</option>
                  <option value="Couples therapy note">
                    Couples therapy note - 80 left
                  </option>
                  <option value="Family therapy note">
                    Family therapy note - 80 left
                  </option>
                </select>
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter client name"
                  value={clientName}
                  onChange={handleClientNameChange}
                />
              </form>
            </ModalBody>

            <ModalFooter>
              <button
                type="submit"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                disabled={!uploadEnabled}
                onClick={handleUpload}
              >
                Finish Upload
              </button>
            </ModalFooter>
          </ModalContent>
        </div>
      </div>


      {uploadTasks.filter((task) => task.status !== "completed").length > 0 && (
      <UploadTask>
        <UploadLength>{uploadTasks.filter((task) => task.status !== "completed").length}</UploadLength>
        <UploadLengthP>Notes in progress</UploadLengthP>
      </UploadTask>
      )}
 
      {uploadTasks.filter((task) => task.status !== "completed").length > 0 && (
        <StyledList>
          <StyledListHeader>
            <StyledListCell1 width="33%">Client</StyledListCell1>
            <StyledListCell1 width="30%" className="d-none d-md-block">
              Type
            </StyledListCell1>
            <StyledListCell1 width="30%" className="d-none d-md-block">
              ETA
            </StyledListCell1>
            <StyledListCell1 width="10%" align="right">
              &nbsp;
            </StyledListCell1>
          </StyledListHeader>

          {uploadTasks.filter((task) => task.status !== "completed").map((task, index) => (

            <StyledListRow key={task.id} index={index}>

              <StyledListCell width="32%">{task.clientName}</StyledListCell>
              <StyledListCell width="30%" className="d-none d-md-block">
                {task.noteType}
              </StyledListCell>
              <StyledListCell width="30%">
            
                <Progress>
                  <ProgressBar
                    role="progressbar"
                    style={{ width: `${task.progress}%` }}
                    aria-valuenow={task.progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {/* {task.progress}% */}
                  </ProgressBar>
                </Progress>
           
              </StyledListCell>
              <StyledListCell
                width="10%"
                align="right"
                className="d-none d-md-block"
              >
             
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

export default UploadComponent;
