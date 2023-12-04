import { createSlice } from "@reduxjs/toolkit";

const initialState= [
            {
                inputNumber:1,
                name: "Border radius",
                value:25,
                type:"Range",
                minMax:[0,250],
            },
            {
                inputNumber:2,
                name: "Height",
                value:250,
                type:"Range",
                minMax:[0,500],
            },
            {
                inputNumber:3,
                name: "Width",
                value:250,
                type:"Range",
                minMax:[0,500],
            },
            
            {
                inputNumber:4,
                name: "Background color",
                value:"#fff",
                type:"color",
                slice:"boxProperties"
            },
]


export const boxSlice = createSlice({
    name:"boxProperties",
    initialState,
    reducers:{
        updateBoxValue:(state,action) =>{
            //ecrir le chiffre ds le carre
            state.find(el =>el.inputNumber===action.payload.inputNumber).value = action.payload.value
        }
    },
})

//action,reducers
export const {updateBoxValue}
= boxSlice.actions
export default boxSlice.reducer