import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk:  thunk is just a fancy word for a function that delays execution. More specifically:

// A thunk is a function that returns another function.

// A payload is just a fancy word for "the data you're sending or receiving."

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://6801396481c7e9fbcc41e88f.mockapi.io/users",
        {
          method: "POST", // creates a new user entry tp the API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      return result;

    } catch (error) {
      return rejectWithValue(error.message); // used to return custom error message/data with rejectWithValue
    }
  }
);

// read action

export const readUser = createAsyncThunk(
  "readUser",
  async ( _, { rejectWithValue }) => { // the "_" is used to indicate that we are not using the first argument of the function
    try {
      const response = await fetch("https://6801396481c7e9fbcc41e88f.mockapi.io/users");

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//update action
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
        console.log(data.id, "id from updateUser thunk")
      try {
        const response = await fetch(
         `https://6801396481c7e9fbcc41e88f.mockapi.io/users/${data.id}`,
          {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
          }
        );
  
        const result = await response.json();
        console.log(result, "result from updateUser thunk");
  
        return result;
  
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

// delete action

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async ( id, { rejectWithValue }) => { // the "_" is used to indicate that we are not using the first argument of the function
    try {
      const response = await fetch(`https://6801396481c7e9fbcc41e88f.mockapi.io/users/${id}`, 
        {
          method: "DELETE"
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// SLICE //

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchInputData: [],
    favourites: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchInputData = action.payload // whenever a user is searched, the searchInputData is updated with the value of the input field (user name or names)
     },
    // addFavourite: (state, action) => {
    //   if(!state.favourites.includes(parseInt(action.payload))) {   state.favourites.push(parseInt(action.payload))
    
    //  }
    // },
    // removeFavourite: (state, action) => {
    //   console.log(action.payload, "action.payload from removeFavourite")
    //   // state.favourites = state.favourites.filter((user) => user.id !== action.payload.id); 
    //  },
  },

  extraReducers: (builder) => {
    builder
     // reading user data
     .addCase(readUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(readUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     // creates a new user entry in the API
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     // updates a user entry in the API
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     // deletes a user entry in the API
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const deletedUserId = action.payload.id;
        if (deletedUserId) {
          state.users = state.users.filter((user) => user.id !== deletedUserId);
        }
      
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userDetail.reducer;

export const { searchUser, addFavourite, removeFavourite } = userDetail.actions; // destructuring the action from the slice
