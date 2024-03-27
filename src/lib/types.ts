type GlobalState = {
    headerActivated : boolean
}
type GlobalStateProp = {
    globalState : GlobalState,
    setGlobalState : React.Dispatch<React.SetStateAction<GlobalState>>
}

export { type GlobalState, type GlobalStateProp }