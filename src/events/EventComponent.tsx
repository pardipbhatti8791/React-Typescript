const EventComponent: React.FC = () => {
    const eventChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart = (event:  React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }
    return <div>
        <input type="text" onChange={eventChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
}

export default EventComponent;
