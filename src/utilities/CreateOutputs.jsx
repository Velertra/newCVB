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
            <label className={(data.name).toLowerCase().replace(/\s/g, '-')} key={`display-${index}`}>
                {data.label}
                <p>{sanitize(text[data.name])}</p>
            </label>
        ))}
     </>
     );
}
 
export default CreateOutputs;

/* CreateOutputs.propTypes = {
    info: PropTypes.array.isRequired,
  }; */