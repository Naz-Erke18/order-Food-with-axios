import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteBasketRequest,
  getBasketRequest,
  postBasketRequest,
  putBasketRequest,
  submitRequest,
} from '../../axios-api/mealsService'

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBasketRequest()
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong getBasket ')
    }
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await postBasketRequest(newItem)
      dispatch(getBasket())
      return data.items
    } catch (error) {
      return rejectWithValue('something went wrong basket')
    }
  }
)

export const deleteBasketItem = createAsyncThunk(
  'basket/deleteBasket',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await deleteBasketRequest(id)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something  went wrong delete ')
    }
  }
)

export const updateBasketItem = createAsyncThunk(
  'basket/updateBasket',
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await putBasketRequest(id, amount)
      dispatch(getBasket())
      return data.data.items
    } catch (error) {
      return rejectWithValue('something went wrong update')
    }
  }
)

export const submitOrder = createAsyncThunk(
  'basket/submitOrder',
  async ({ data }, { dispatch, rejectWithValue }) => {
    try {
      await submitRequest(data)
      return dispatch(getBasket())
    } catch (error) {
      return rejectWithValue('something went wrong submitorder')
    }
  }
)
