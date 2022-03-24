const Part = ({part,exercise})=>{
    return(
        <div>
            <p>
                {part} {exercise}
            </p>
        </div>
    )
}
const Content = ({parts}) =>{
    return(
        <div>
            <Part part={parts[0].part} exercise={parts[0].exercise} />
            <Part part={parts[1].part} exercise={parts[1].exercise} />
            <Part part={parts[2].part} exercise={parts[2].exercise} />

        </div>
    )
}

export default Content;