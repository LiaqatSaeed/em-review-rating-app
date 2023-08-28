import API from "../lib/api/Auth";

import {createAsyncThunk } from '@reduxjs/toolkit';

export const userLogin =  createAsyncThunk('user/userLogin', async ({ username, password }: { username: string; password: string }) => {
  try {
    
    const response = await API.login({ username, password });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const userRegister =  createAsyncThunk('user/userRegister', async (params: any) => {
    try {
      
      const response = await API.register(params);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });
