export interface LoginValues {
  identification: string;
  password: string;
}
export interface ChangPasswordType {
  OldPassword: string;
  NewPassword: string;
  ConfirmPassword: string;
}
export interface PopUpParams {
  title: React.ReactNode;
  closeAction?: any;
  children: React.ReactNode;
  type: "SideBar" | "LogOut" | "ChangePassword";
  PopSize:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}
export interface ProfileData {
  status: boolean;
  code: number;
  data: {
    id: number;
    userName: string;
    image: string;
    phoneNumber: string;
    token: string;
  };
  errorMessage: string | null;
  totalCount: number;
}
export interface DrugData {
  status: boolean;
  code: number;
  data: {
    id: number;
    name: string;
    image: string;
  }[];
  errorMessage: string | null;
  totalCount: number;
}
export interface ProductsData {
  status: boolean;
  code: number;
  data: {
    id: number;
    name: string;
    image: string;
  }[];
  errorMessage: string | null;
  totalCount: number;
}
export interface UpdateUserNameINputs {
  userName: string;
}
export interface UpdatePasswordINputs {
  newPassword: string;
  confirmPassword: string;
  oldPassword: string;
}
export interface UpdateImageINputs {
  File: File;
}
