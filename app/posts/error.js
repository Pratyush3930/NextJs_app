//this will handle the error if our page does not load properly

'use client'; //error component must be client component

const { useEffect } = require("react");

const Error = ({error , reset}) => {

    useEffect(() => {
     //log the error to an error reporting service
     console.log(error);
    }, [error]);

    return(
        <div>
            <h2>Something went wrong!</h2>
            <button 
             onClick={
                //Attempt to recover by trying to re-render the segment
                () => reset()
             }
            >
                Try again
            </button>
        </div>
    )
}

export default Error;