const CreateOutputs = ( { info, text } ) => {
    return ( 
        <>
        {info.map((data, index) => (
            <div key={`display-${index}`}>
                <p>{text[data.name]}</p>
            </div>
        ))}
     </>
     );
}
 
export default CreateOutputs;

/* CreateOutputs.propTypes = {
    info: PropTypes.array.isRequired,
  }; */