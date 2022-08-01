import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDark: false,
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        turnLightsOff: (state) => {
            state.isDark = true
        },
        turnLightsOn: (state) => {
            state.isDark = false
        },
        toggleLights: (state) => {
            state.isDark = !state.isDark
        }
    },
})

// Action creators are generated for each case reducer function
export const { turnLightsOff, turnLightsOn, toggleLights } = darkModeSlice.actions

export default darkModeSlice.reducer