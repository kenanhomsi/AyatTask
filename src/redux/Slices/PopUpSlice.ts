import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  SideBar: boolean;
  NavBarDropDown: boolean;
  LogOut: boolean;
  ChangePassword: boolean;
}

const initialState: initialState = {
  SideBar: false,
  LogOut: false,
  NavBarDropDown: false,
  ChangePassword: false,
};
const PopUpSlice = createSlice({
  name: "PopUp",
  initialState,
  reducers: {
    OpenNavBarDropDown(state) {
      state.NavBarDropDown = true;
    },
    closeNavBarDropDown(state) {
      state.NavBarDropDown = false;
    },
    OpenSideBar(state) {
      state.SideBar = true;
    },
    closeSideBar(state) {
      state.SideBar = false;
    },
    OpenLogOut(state) {
      state.LogOut = true;
    },
    closeLogOut(state) {
      state.LogOut = false;
    },
    OpenChangePassword(state) {
      state.ChangePassword = true;
    },
    closeChangePassword(state) {
      state.ChangePassword = false;
    },
  },
});

export const {
  OpenSideBar,
  closeSideBar,
  OpenNavBarDropDown,
  closeNavBarDropDown,
  OpenLogOut,
  closeLogOut,
  OpenChangePassword,
  closeChangePassword,
} = PopUpSlice.actions;
export default PopUpSlice.reducer;
