import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckIn() {
    const [code, setCode] = useState("");
    const [status, setStatus] = useState(null);
    const [guests, setGuests] = useState([]);

    const fetchGuests = async () => {
        const res = await axios.get("/checked-in-guests");
        setGuests(res.data);
    };

    useEffect(() => {
        fetchGuests();
    }, []);

    const handleCheckIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/check-in", { code });
            setStatus({ type: "success", message: res.data.message });
            setCode("");
            fetchGuests();
        } catch (err) {
            setStatus({ type: "error", message: err.response?.data?.message || "Error" });
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-pink-100 py-8">
            <div className="flex items-center gap-3 mb-6">
                <img src="/golden-penny-logo.png" alt="Logo" className="w-12 h-12" />
                <h1 className="text-lg font-bold">The Golden Penny Soup Festival</h1>
            </div>

            <form onSubmit={handleCheckIn} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <label className="block text-sm font-semibold mb-2">Scan QR Code</label>
                <input
                    type="text"
                    placeholder="Enter QR Code or Scan"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="border border-gray-300 rounded-md w-full p-2 mb-4"
                />
                <button type="submit" className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700">
                    CHECK-IN
                </button>
            </form>

            {status && (
                <p className={`mt-4 text-sm font-medium ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                    {status.message}
                </p>
            )}

            <div className="mt-8 bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
                {guests.length === 0 ? (
                    <>
                        <div className="text-gray-400 text-4xl">⬜⬜</div>
                        <p className="mt-2 text-gray-500">No guests checked in yet</p>
                        <p className="text-gray-400 text-sm">Scan a QR code to begin</p>
                    </>
                ) : (
                    <>
                        <h2 className="text-lg font-bold mb-3">Checked-In Guests</h2>
                        <ul className="text-left">
                            {guests.map((g) => (
                                <li key={g.id} className="py-1 border-b">{g.name}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}
