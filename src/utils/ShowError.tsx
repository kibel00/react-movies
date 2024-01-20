export default function ShowError(props: showErrorProps) {
    
    const style = { color: 'red' } 
    return (
        <>
            {
                props.errors ?
                    <ul style={style}>
                        {
                            props.errors.map((error, index) => <li key={index}>{error}</li>)
                        }
                    </ul> : null
            }
        </>
    )
}

interface showErrorProps {
    errors?: string[];
}