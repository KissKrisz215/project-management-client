export function TaskCard({task}){

    const {title, description} = task;

    return(
        <>
            <h2>{title}</h2>
            <p>{description}</p>   
        </>
    );
}