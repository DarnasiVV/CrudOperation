import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Edit(props: any) {
    const { names, setNames } = props
    const [updateName, setUpdateName] = useState<any>('');
    const [enable, setEnable] = useState<boolean>(false);
    const EditName = (e: any) => {
        setEnable(true);
    }
    const UpdateName = (e: any) => {
        debugger
        const index = names.indexOf(updateName);
        names[index]= updateName;
        setNames([...names]);
        setEnable(false);
    }
    return (
        <>
            {enable ? <>
                <Form.Control value={updateName} onChange={(e) => { setUpdateName(e.target.value); }} />
                <Button onClick={(e) => { UpdateName(e) }}>Update</Button>
                <Button>Delete</Button>
            </> :
                <>
                    <Button onClick={(e) => { EditName(e) }}>Edit</Button>
                    <Button>Delete</Button>
                </>}
        </>
    )
}

export default Edit;