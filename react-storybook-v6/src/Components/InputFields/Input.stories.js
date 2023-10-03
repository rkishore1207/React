import Input from "./Input"

export default{
    title:'Form/Control/Input Fields',
    component:Input
}

export const Small =()=><Input variant='small' placeholder='Small Field'></Input>
export const Medium =()=><Input variant='medium' placeholder='Medium Field'></Input>
export const Large =()=><Input variant='large' placeholder='Large Field'></Input>
