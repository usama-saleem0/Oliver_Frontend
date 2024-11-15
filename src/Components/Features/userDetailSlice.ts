import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { baseurl } from "../baseurl";
import { Job } from "../../types/job";
import {  AppliedJob } from "../../types/AppliedJob";

interface User {
  id?: string;
  [key: string]: any;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  searchData: User[];
  isLoggedIn: boolean;
  currentUser: User | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
  searchData: [],
  isLoggedIn: false,
  currentUser: null,
};

// Create async thunk actions
export const createUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        "https://641dd63d945125fff3d75742.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const showUser = createAsyncThunk<User[], void, { rejectValue: string }>(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


export const post_documents = createAsyncThunk<User, User, { rejectValue: string }>(
  "post_documents",
  async (data, { rejectWithValue }) => {
    console.log("Document DATA", data);
    try {
      const response = await fetch(
        `${baseurl}/post_documents`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const deleteUser = createAsyncThunk<User, string, { rejectValue: string }>(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const updateUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("updated data", data);
    try {
      const response = await fetch(
        `https://641dd63d945125fff3d75742.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const signup = createAsyncThunk<User, User, { rejectValue: string }>(
  "signup",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);

export const getemails = createAsyncThunk<User[], void, { rejectValue: string }>(
  "getemails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${baseurl}/get-emails`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const getprofile = createAsyncThunk<User[], void, { rejectValue: string }>(
  "getprofile",
  async (_, { rejectWithValue }) => {
    try {
      const storedUserData = localStorage.getItem("userData");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;

      const response = await fetch(`${baseurl}/getprofile?id=${userData.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const getjob = createAsyncThunk<Job[], void, { rejectValue: string }>(
  "getjob",
  async (_, { rejectWithValue }) => {
    try {
    

      const response = await fetch(`${baseurl}/getjobs`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result.jobs);
      return result.jobs as Job[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);




export const getapplication = createAsyncThunk<Job[], void, { rejectValue: string }>(
  "getapplication",
  async (_, { rejectWithValue }) => {
    try {

      const storedUserData = localStorage.getItem("userData");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;
    

      const response = await fetch(`${baseurl}/getApplication?id=${userData.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result.jobs);
      return result.jobs as Job[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);




export const getpitch = createAsyncThunk<Job[], void, { rejectValue: string }>(
  "getpitch",
  async (_, { rejectWithValue }) => {
    try {

      const storedUserData = localStorage.getItem("userData");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;
    

      const response = await fetch(`${baseurl}/getPitch?id=${userData.id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result.jobs);
      return result.jobs as Job[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const shortlist = createAsyncThunk<Job[], void, { rejectValue: string }>(
  "shortlist",
  async (_, { rejectWithValue }) => {
    try {

      const storedUserData = localStorage.getItem("jobDatas");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;


      const storedUserDatas = localStorage.getItem("userData");
      const userDatas = storedUserDatas ? JSON.parse(storedUserDatas) : null;
    

      // const response = await fetch(`${baseurl}/shortlist?id=${userData.id}`);

      const response = await fetch(`${baseurl}/shortlist?id=${userData.job_id}&user_id=${userDatas.id}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result.jobs);
      return result.jobs as Job[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


export const Rejected = createAsyncThunk<Job[], void, { rejectValue: string }>(
  "Rejected",
  async (_, { rejectWithValue }) => {
    try {

      const storedUserData = localStorage.getItem("jobDatas");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;


      const storedUserDatas = localStorage.getItem("userData");
      const userDatas = storedUserDatas ? JSON.parse(storedUserDatas) : null;
    

      // const response = await fetch(`${baseurl}/shortlist?id=${userData.id}`);

      const response = await fetch(`${baseurl}/rejection?id=${userData.job_id}&user_id=${userDatas.id}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result.jobs);
      return result.jobs as Job[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const instructorjobs = createAsyncThunk<Job[], void, { rejectValue: string }>(
  "instructorjobs",
  async (_, { rejectWithValue }) => {
    try {
    
      const storedUserData = localStorage.getItem("userData");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;

      const response = await fetch(`${baseurl}/instructorjobs?instructor_id=${userData.id}`);
      // const response = await fetch(`${baseurl}/getjobs`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result,"jobsredux");
      return result as Job[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);






export const login = createAsyncThunk<User, User, { rejectValue: string }>(
  "login",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const savejob = createAsyncThunk<User, User, { rejectValue: string }>(
  "savejob",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/savejob`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const createschedule = createAsyncThunk<User, User, { rejectValue: string }>(
  "createschedule",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/createschedule`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);



export const appliedjob = createAsyncThunk<User, User, { rejectValue: string }>(
  "appliedjob",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/applyjob`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);






export const get_instructors_upcoming_requests = createAsyncThunk<AppliedJob[], void, { rejectValue: string }>(
  "getinstructorsupcomingrequests",
  async (_, { rejectWithValue }) => {
    try {
    
      const storedUserData = localStorage.getItem("userData");
      const userData = storedUserData ? JSON.parse(storedUserData) : null;

      const response = await fetch(`${baseurl}/getinstructorjobrequest/${userData.id}`);
      // const response = await fetch(`${baseurl}/getjobs`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log(result.Applied_Jobs_Arr,"TS");
      return result.Applied_Jobs_Arr as AppliedJob[]
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


export const update_job_details = createAsyncThunk<User, User, { rejectValue: string }>(
  "update_job_details",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/updatejobdetails`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


export const delete_job_details = createAsyncThunk<User, User, { rejectValue: string }>(
  "delete_job_details",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/deletejobdetails`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);


export const get_tracking_status = createAsyncThunk<User, User, { rejectValue: string }>(
  "get_tracking_status",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
    try {
      const response = await fetch(
        `${baseurl}/gettrackingstatus`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      alert(error)
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);







document.cookie = "connect.sid=s%3AAYioIb-bxT3j02T5kgdr6_9cqbHYGZXg.BG5d7Al3u%2FXsj%2BIcFQCzcmH1jM6dBH1GwnMmPSN7srI";
export const edituser = createAsyncThunk<User, User, { rejectValue: string }>(
  "edituser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${baseurl}/updateuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: 'include',
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  }
);
// Create the slice
export const userDetail = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    searchUser: (state, action: PayloadAction<User[]>) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
      // Clear any other session data as needed
      localStorage.removeItem('user'); // Example: Clear user data from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      })
      .addCase(getemails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getemails.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getemails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      });
  },
});

export const { searchUser, loginSuccess, logoutSuccess} = userDetail.actions;

export default userDetail.reducer;
