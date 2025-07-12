//Greeting.js

const Greeting = (props) => {
    return (
        <>
            <h3>Hello {props.name}, this is react testing</h3>
            <p>Your age is {props.age}</p>
        </>
    )

}

export default Greeting;