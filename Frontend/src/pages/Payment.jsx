import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, CheckCircle, ShieldCheck, Calendar, MapPin, User, Loader2 } from "lucide-react";
import { AppContext } from "../context/AppContext";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addBooking } = useContext(AppContext);
    const { hotel, room, price } = location.state || {};

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("card");

    // Redirect if no booking data is present (direct access protection)
    useEffect(() => {
        if (!hotel || !room) {
            navigate('/hotels');
        }
    }, [hotel, room, navigate]);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);

            // Add booking to context
            addBooking({
                hotelName: hotel.name,
                hotelImage: hotel.image,
                hotelAddress: hotel.address,
                roomType: room.type,
                price: price,
                status: "Confirmed",
                paymentMethod: paymentMethod === 'card' ? 'Credit/Debit Card' : 'UPI'
            });

            // Navigate to success page or home after delay
            setTimeout(() => {
                alert("Booking Confirmed! Check your email for details.");
                navigate('/my-bookings');
            }, 2000);
        }, 2500);
    };

    if (!hotel) return null;

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4 mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* Left Side: Order Summary */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-600"></div>
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <img src={hotel.image} alt={hotel.name} className="w-20 h-20 rounded-lg object-cover" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 line-clamp-1">{hotel.name}</h3>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <MapPin className="w-3 h-3 mr-1" />
                                        <span className="line-clamp-1">{hotel.address}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-amber-600 mt-1 font-medium">
                                        ⭐ {hotel.rating} / 5
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div>
                                <p className="text-sm text-gray-500">Room Type</p>
                                <p className="font-semibold text-gray-800">{room.type}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {room.features.slice(0, 3).map((f, i) => (
                                        <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{f}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                <div className="text-sm text-gray-600">Total Price</div>
                                <div className="text-xl font-bold text-gray-900">₹{price}</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3 border border-blue-100">
                        <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-800">Your payment details are secure. We use industry-standard encryption to protect your data.</p>
                    </div>
                </div>

                {/* Right Side: Payment Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Secure Payment</h2>
                        <p className="text-gray-500 mb-8">Complete your booking by providing your payment details.</p>

                        {/* Payment Methods */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setPaymentMethod("card")}
                                className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all flex items-center justify-center gap-2 ${paymentMethod === 'card' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
                            >
                                <CreditCard className="w-5 h-5" />
                                Credit / Debit Card
                            </button>
                            <button
                                onClick={() => setPaymentMethod("upi")}
                                className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all flex items-center justify-center gap-2 ${paymentMethod === 'upi' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}
                            >
                                <span className="text-lg">⚡</span>
                                UPI / Wallet
                            </button>
                        </div>

                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center animate-fadeIn">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                                <p className="text-gray-500 text-lg">Your room has been booked successfully.</p>
                            </div>
                        ) : (
                            <form onSubmit={handlePayment} className="space-y-6">
                                {paymentMethod === 'card' ? (
                                    <>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                                            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                            <div className="relative">
                                                <CreditCard className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" required />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                                <input type="text" placeholder="MM / YY" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" required />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                                <input type="password" placeholder="123" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" required />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                                        <input type="text" placeholder="username@upi" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" required />
                                        <p className="text-xs text-gray-500 mt-2">Enter your UPI ID to receive a payment request on your phone.</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        `Pay ₹${price}`
                                    )}
                                </button>
                            </form>
                        )}

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Payment;
