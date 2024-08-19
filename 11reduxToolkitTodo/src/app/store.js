import {configureStore} from '@reduxjs/toolkit'
import todoRedcer from '../features/todo/todoSlice'


export const store = configureStore({
    reducer : todoRedcer

})