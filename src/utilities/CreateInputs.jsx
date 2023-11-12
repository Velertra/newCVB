//import Firstinput from '../components/FirstInput';


const InfoComponent = ( { info, handleTextChange } ) => {

    return ( 
        <>
        {info.map((data, index) =>
            <div className={`container-${data.name}`} key={index}>
                <label>{data.label}{" "}
                    <input
                        name={`input-${data.name}`} 
                        onChange={(e) => handleTextChange(data.name, e.target.value)}   
                    />
                </label>
            </div>
        )}
        </>
    );
}
 
export default InfoComponent;