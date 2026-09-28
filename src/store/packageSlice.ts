import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";

export interface CreatePackagePayload {
    formData: FormData;
}

interface PackageState {
    loading: boolean;
    success: boolean;
    error: string | null;
    packageId: string | null;
}

const initialState: PackageState = {
    loading: false,
    success: false,
    error: null,
    packageId: null,
};

export const createPackage = createAsyncThunk<
    any,
    CreatePackagePayload,
    { rejectValue: string }
>(
    "package/createPackage",
    async ({ formData }, thunkAPI) => {
        try {
            const response = await fetch(
                "/api/admin/packages",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (!response.ok) {
                return thunkAPI.rejectWithValue(
                    result.message ||
                        "Failed to create package"
                );
            }

            return result.data;
        } catch {
            return thunkAPI.rejectWithValue(
                "Unable to connect to the server"
            );
        }
    }
);

const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {
        resetPackageState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
            state.packageId = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(
                createPackage.pending,
                (state) => {
                    state.loading = true;
                    state.success = false;
                    state.error = null;
                }
            )

            .addCase(
                createPackage.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.success = true;
                    state.error = null;
                    state.packageId =
                        action.payload.id;
                }
            )

            .addCase(
                createPackage.rejected,
                (state, action) => {
                    state.loading = false;
                    state.success = false;
                    state.error =
                        action.payload ||
                        "Failed to create package";
                }
            );
    },
});

export const {
    resetPackageState,
} = packageSlice.actions;

export default packageSlice.reducer;