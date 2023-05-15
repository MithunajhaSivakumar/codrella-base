import * as api from '../api/index'
import { AUTH } from '../constants/actionTypes';

export const logIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    if (!data.success) throw new Error(data.error);
    dispatch({ type: AUTH, data });
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    if (!data.success) throw new Error(data.error);
    dispatch({ type: AUTH, data });
    navigate('/dashboard');
  } catch (error) {
    console.log(error);
  }
};