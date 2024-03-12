import { useRef, useState } from "react";
import InputComponent from "./InputComponent";
import mainData from "../constants/MainData.json";
import CreateOutputs from "./OutputComponent";

const MainComponent = () => {
  const [text, setText] = useState("");
  
  function runThisFunction(e) {
    e.preventDefault();
  }

  function sendTextBack(text, name) {
    setText((prevText) => ({ ...prevText, [name]: text }));
  }

  function addDefaultData() {
    if (text == undefined || text.text1 !== "Josephine Myers") {
      const defaultData = {};
      [
        mainData.personal.a,
        mainData.education.b,
        mainData.experience.e,
        mainData.experience.f,
      ].forEach((arr) => {
        arr.forEach((data) => {
          defaultData[data.name] = data.default;
        });
      });
      setText(() => defaultData);
    } else {
      for (let state in text) {
        setText((prevText) => ({ ...prevText, [state]: "" }));
      }
    }
  }


  function displaySection(edit) {
    edit.target.style.display = "none"
      edit.target.parentNode.parentNode.nextElementSibling.style.display =
        "block";
        edit.target.parentNode.querySelector('[id*="remove"]').style.display = "none";
  }

  function removeSection(remove){
    remove.target.parentNode.parentNode.style.display = "none";
    const divs = remove.target.parentNode.parentNode.previousElementSibling.childNodes;

    divs.forEach((div) => {
      if(div.id == "input-btns"){
        div.childNodes.forEach((child) => {
          child.style.display = "block";
        })
      }
    })
  
    if(["b-inputs", "e-inputs"].includes(remove.target.parentNode.parentNode.previousElementSibling.id)){
      remove.target.parentNode.parentNode.previousElementSibling.querySelector('[id*="remove"]').style.display = "none";
    }
  
    remove.target.parentNode.parentNode.querySelectorAll('input').forEach((input) => {
      setText((prevText) => ({ ...prevText, [input.id]: "" }));
      
    })
  }

  return (
    <div id="main-component" className="flex flex-col items-center pb-8 md:flex-row md:items-start" >
      <div id="main-inputs" className="flex flex-col items-center w-11/12 md:w-7/12 md:pl-5 md:pr-5">
        <img
          src="/icon/user-pen.svg"
          className="w-9 self-baseline mt-5 ml-3"
          id="fillin-icon"
          onClick={() => addDefaultData()}
        ></img>
        {Object.entries(mainData).map(([key, obj]) => (
          <div
            id={key + "-input-container"}
            className="w-full flex flex-col items-center m-3 border-2 rounded-2xl"
            key={key}
          >
            <form id={key + "-inputs"} className="w-11/12 my-10" onSubmit={(e) => runThisFunction(e)}>
              <h2 id="section-type" className="flex ">{key.length > 4 && (key.charAt(0).toUpperCase() + key.slice(1))}</h2>
              {Object.entries(obj).map(([key, objSection]) => (
                <div id={key + '-inputs'} className="w-full" key={key}>
                  {Object.entries(objSection).map(([key, objItem]) => (
                    <div id={objItem.name + "-input"} className="flex justify-center" key={key}>
                      <InputComponent
                        data={objItem}
                        defaultText={text}
                        sendTextBack={(e, x) => sendTextBack(e, x)}
                      />
                    
                  </div>
                  ))}
                  <div id="input-btns" className=" flex flex-col">
                  <button id={key + "-remove-btn"} className="bg-blue-700 hover:bg-blue-900 mb-3 text-white w-0  font-bold py-2 px-4 rounded" onClick={(e) => removeSection(e)}>-</button> 
                    <button id={key + "-add-btn"} className="bg-blue-700 hover:bg-blue-900 text-white w-full font-bold py-2 px-4 rounded" onClick={(e) => displaySection(e)}>+</button>
                  </div>
                </div>
                
              ))}
              
              
            </form>
          </div>
        ))}
      </div>
      <div id="resume-section" className="flex flex-col items-center w-full mt-5 pb-4 md:w-8/12">
        <div id={"outputs"} className="w-11/12 ">
          <CreateOutputs data={mainData} text={text}/>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;