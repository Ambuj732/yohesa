import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  selectedEmployee: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    selectEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    updateEmployee: (state, action) => {
      state.employees = state.employees.map((emp) =>
        emp.staffId === action.payload.staffId ? action.payload : emp
      );
    },
  },
});

export const { setEmployees, selectEmployee, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
