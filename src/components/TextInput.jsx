export const TextInput = ({
    onTextChange,
    placeholder,
    type,
    value,
    inputStyle,
}) => {
    return(
        <div style={{display:"flex", flex:1}}>
            <input
                type={type}
                placeholder={placeholder}
                style={{ ...style.input, inputStyle}}
                onChange={onTextChange}
                value={value}
            />
        </div>
    );
};

const style ={
    input: {
        borderRadius:'12px',
        width:'100%'

    }
}