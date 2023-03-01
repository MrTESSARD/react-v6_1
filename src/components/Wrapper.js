function Wrapper({children}) {//props.children
    // console.log(children)
    // children="bonjour"
    // props.children="bonjour"//props immiables 

    return(
        <div style={{backgroundColor: "pink", width: '400px', padding:'10px', margin: '5px auto'}}>
           {children}
            </div>


    )
    
}
export default Wrapper