import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Ödəniş intentini backend-dən almaq üçün async thunk
export const createPaymentIntentThunk = createAsyncThunk("payment/createPaymentIntent", async (amount, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:5000/api/payment/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, currency: "usd" }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Ödəniş alınmadı");
        return data.clientSecret;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        payment: null,
        loading: false,
        error: null
    },
    reducer: [],
    extraReducers: builder =>
        builder
            .addCase(createPaymentIntentThunk.fulfilled, (state, action) => {
                console.log("✅ Backend-dən gələn clientSecret:", action.payload);  // Debug
                state.loading = false;
                state.payment = action.payload; 
            })
            .addCase(createPaymentIntentThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPaymentIntentThunk.rejected, (state, action) => {
                console.error("❌ Redux Xətası:", action.payload || action.error.message);  // Debug
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
},
);

export default paymentSlice.reducer