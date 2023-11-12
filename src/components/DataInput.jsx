import Firstinput from "./FirstInput";


const InfoComponent = ( { info, handleTextChange } ) => {

    return ( 
        <>
        {info.map((data, index) =>
            <div className={`container-${data.name}`} key={index}>
                <Firstinput
                    handleTextChange={(e) => handleTextChange(data.name, e)}
                    data={data}
                />
            </div>
        )}
        </>
    );
}
 
export default InfoComponent;