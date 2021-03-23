interface ChildProps {
    color: string;
    age?: number;
    onClick: () => void
}

export const Child = ({ color, age, onClick }: ChildProps) => {
    return <div>{color} and { age }
    <button onClick={onClick}>Click Me</button>
    </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, age, onClick, children }) => {
    return <div>{color} && {age}
        <button onClick={onClick}>Click Me</button>
        <p>{children}</p>
    </div>
}
