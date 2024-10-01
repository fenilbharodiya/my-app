import StudentComponent from "./StudentComponent"


export default function SchoolComponent() {
    const details = {
        name: "School",
        address: "101 varsha soc"
    }

    return (
        <>
            <h1>This is School Component</h1>

            <StudentComponent details={details} />
            <StudentComponent name="Student 1" />
        </>
    )
}

