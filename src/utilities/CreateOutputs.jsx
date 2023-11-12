const CreateOutputs = ( { info, text } ) => {

    function sanitize(letters){
        if(typeof letters === 'string') {
            return letters.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        } else {
            return ''
        }
    }

    return ( 
        <>
        {info.map((data, index) => (
            
            <div className={(data.label).toLowerCase().replace(/\s/g, '-')} key={`display-${index}`}>
                <p>{sanitize(text[data.name])}</p>
            </div>
        ))}
     </>
     );
}
 
export default CreateOutputs;

/* CreateOutputs.propTypes = {
    info: PropTypes.array.isRequired,
  }; */