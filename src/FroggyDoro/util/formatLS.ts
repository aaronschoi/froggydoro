type TformatLS = (lsInput : string | null) => number;

export const formatLS : TformatLS = (lsInput) => {
    if(lsInput){
        return parseInt(lsInput)
    }
    return 0
}