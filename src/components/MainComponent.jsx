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
    //console.log(edit.target.parentNode.parentNode.id);
    edit.target.style.display = "none"
      edit.target.parentNode.nextElementSibling.style.display =
        "block";
        edit.target.parentNode.querySelector('[id*="remove"]').style.display = "none";

   /*  if (edit.target.parentNode.parentNode.id == "education-input-container") {
      edit.target.style.display = "none"
      edit.target.parentNode.nextElementSibling.style.display =
        "block";
        edit.target.parentNode.querySelector('[id*="remove"]').style.display = "none";

    } else {
      edit.target.style.display = "none"
      edit.target.parentNode.nextElementSibling.style.display =
        "block";
      edit.target.parentNode.querySelector('[id*="remove"]').style.display = "none";
      
    } */
  }

  function removeSection(remove){
    //console.log(remove.target.parentNode.previousElementSibling.id);
    remove.target.parentNode.style.display = "none";
    remove.target.parentNode.previousElementSibling.querySelector('[id*="add-btn"]').style.display = "block";
    remove.target.parentNode.previousElementSibling.querySelector('[id*="remove"]').style.display = "block";

    if(["b-inputs", "e-inputs"].includes(remove.target.parentNode.previousElementSibling.id)){
      remove.target.parentNode.previousElementSibling.querySelector('[id*="remove"]').style.display = "none";
    }
  
    remove.target.parentNode.querySelectorAll('input').forEach((input) => {
      setText((prevText) => ({ ...prevText, [input.id]: "" }));
    })
  }

  return (
    <div id="main-component" className="max-h-full font-serif ">
      <div id="main-inputs">
        <img
          src="/icon/user-pen.svg"
          className="w-1/12"
          id="fillin-icon"
          onClick={() => addDefaultData()}
        ></img>
        {Object.entries(mainData).map(([key, obj]) => (
          <div
            id={key + "-input-container"}
            className="flex flex-col no-scrollbar overflow-auto p-2 bg-purple-400 min-[600px]:w-2/5 child:border-2 child:border-blue-700 child:p-2"
            key={key}
          >
            <form id={key + "-inputs"} onSubmit={(e) => runThisFunction(e)}>
              {key.length > 4 && key}
              {Object.entries(obj).map(([key, objSection]) => (
                <div id={key + '-inputs'} className="border-8 border-purple-400" key={key}>
                {Object.entries(objSection).map(([key, objItem]) => (
                  <div key={key}>
                  <InputComponent
                    data={objItem}
                    defaultText={text}
                    sendTextBack={(e, x) => sendTextBack(e, x)}
                  />
                  
                </div>
                ))}
                <button id={key + "-add-btn"} onClick={(e) => displaySection(e)}>+</button>
                <button id={key + "-remove-btn"} onClick={(e) => removeSection(e)}>-</button> 
                </div>
                
              ))}
              
              
            </form>
          </div>
        ))}
      </div>
      <div className="resume-section">
        <div className={"outputs"}>
          <CreateOutputs data={mainData} text={text}/>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;

{
  /* {Object.entries(mainData.EducationInfo).map(([key, objSection]) => (
                    <div key={key}>
                        <InputComponent
                            data={objSection}
                            sendTextBack={(e, x) => sendTextBack(e, x)}
                        />
                    </div>
                ))} */
}

/* import { useEffect, useState } from 'react';
import CreateInput from '../utilities/CreateInputs'
import { PersonalInfo, EducationInfo, ExperienceInfo } from '../constants/MainData';
import OutputComponent from './OutputComponent';
import InputComponent from './InputComponent';


const MainComponent = () => {
    const [text, setText] = useState({});
    const [extraExper, setExtraExper] = useState([]);
    const [extraEduc, setExtraEduc] = useState([]);

    function handleTextChange(name, value){
        setText((prevText) => ({ ...prevText, [name]: value }));
    } 

    //sets default data, also deletes if first input equals 'Josephine Myers'
    function addDefaultData(){
        if(text == undefined || text.text1 !== 'Josephine Myers'){
           const defaultData = {};
                [PersonalInfo, EducationInfo, ExperienceInfo].forEach((arr) => {
                    arr.forEach((data) => {
                        defaultData[data.name] = data.default;
                    })
                })
            setText(() => defaultData);
        } else{
            for(let state in text){
                setText((prevText) => ({...prevText, [state]: ''}))
            }
        }
    }

    function amountOfExtras(e){
        if(e.target.id == "experience"){
            setExtraExper((prev) => [...prev, <div key={prev.length}>{prev.length}</div>]);
        } else {
            setExtraEduc((prev) => [...prev, <div key={prev.length}>{prev.length}</div>]);
        }
    }

    function removeSection(test){
        let newSections = [];
        //console.log(extraExper[x])
        for(let x = 0; x < extraExper.length; x++){
            console.log(extraExper[x])
            if(extraExper[x] !== extraExper[test.key]){
                newSections.push(extraExper[x]);
            }
        }
        console.log(newSections)
        setextraExper(() => newSections)
    }


    return ( 
        <div className='max-h-full font-serif min-[600px]:flex'>
            <div className='flex flex-col no-scrollbar overflow-auto p-2 bg-purple-400 min-[600px]:w-2/5 child:border-2 child:border-blue-700 child:p-2' id='input-container'>
                <img src='/icon/user-pen.svg' className='w-2/12' id='fillin-icon' onClick={() => addDefaultData()} ></img>
                <div className='bg-green-300'>
                    <form >
                    {PersonalInfo.map((data, index) => 
                        <InputComponent
                            info={PersonalInfo}
                            handleTextChange={handleTextChange}
                            defaultValues={text}
                            data={data}
                            key={index}
                        />
                    )}
                    </form>
                </div>
                <div className='bg-green-300'>
                    <CreateInput
                        info={ExperienceInfo}
                        handleTextChange={handleTextChange}
                        defaultValues={text}
                        container='experience'
                        amountOfExtras={amountOfExtras}
                    />
                </div>
                <div className='bg-green-300'>
                    <CreateInput
                        info={EducationInfo}
                        handleTextChange={handleTextChange}
                        defaultValues={text}
                        container='educational'
                        amountOfExtras={amountOfExtras}
                    />
                </div>
            </div>

            <div id='outputs' className='flex flex-col overflow-auto border-2 min-[600px]:w-3/5 border-red-600 no-scrollbar p-4 child:px-4 child:bg-teal-600'>
                <section className=''>
                    <div className=' pt-1'>
                        <OutputComponent
                            info={PersonalInfo}
                            text={text}
                            settings={false}
                        />
                    </div>
                </section>
                <section id='resume-body' className=''>
                    <div className=''>
                        <h1 className='text-xl font-bold font-serif'>Experience</h1>
                            <div className='flex flex-wrap h-full'>
                                <OutputComponent
                                    info={ExperienceInfo}
                                    text={text}
                                    settings={false}
                                />
                            </div>
                            <div className='flex flex-wrap h-full'>
                            {Array.isArray(extraExper) &&
                                extraExper.map((extra, index)=> (
                                    <OutputComponent
                                        key={index}
                                        info={ExperienceInfo}
                                        text={text}
                                        indexNumber={index}
                                        settings={true}
                                        removeSection={removeSection}
                                    />
                            ))}
                            </div>
                    </div>
                    <h1 className='text-xl font-medium'>Eduction</h1>
                    <div className='flex flex-wrap pb-2'>   
                        <OutputComponent
                            info={EducationInfo}
                            text={text}
                            settings={false}
                        />
                    </div>
                    <div className='flex flex-wrap pb-2'>    
                        {Array.isArray(extraEduc) &&
                                extraEduc.map((extra, index)=> (
                                    <OutputComponent
                                        key={index}
                                        info={EducationInfo}
                                        text={text}
                                        indexNumber={index}
                                        settings={true}
                                    />
                            ))}
                    </div>
                    
                </section>
            </div>
        </div>
     );
}
 
export default MainComponent; */
