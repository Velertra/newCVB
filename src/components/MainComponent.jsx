import { useEffect, useState } from 'react';
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

    //sets default data, also deltes if first input equals 'Josephine Myers'
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
        console.log(e.target.id)
        if(e.target.id == "experience"){
            setExtraExper((prev) => [...prev, <div key={prev.length}>{prev.length}</div>]);
        } else {
            setExtraEduc((prev) => [...prev, <div key={prev.length}>{prev.length}</div>]);
        }
        
    }

    return ( 
        <div className='flex max-h-full font-serif'>
            <div className='flex flex-col w-2/5 no-scrollbar overflow-auto p-2 bg-purple-400 child:border-2 child:border-blue-700 child:p-2' id='input-container'>
                <img src='/icon/user-pen.svg' className='w-2/12' id='fillin-icon' onClick={() => addDefaultData()} ></img>
                <div className='bg-green-300'>
                    <form>
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

            <div id='outputs' className='flex flex-col w-3/5 overflow-auto border-2 border-red-600 no-scrollbar p-4 child:px-4 child:bg-teal-600'>
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
 
export default MainComponent;