import { useEffect } from "react";
import confetti from "canvas-confetti";
import SparkleBackground from "./SparkleBackground";

export default function SuccessPopup({ qrUrl, onClose }) {
    useEffect(() => {
        const duration = 2 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <SparkleBackground />
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md relative z-10">
                <h2 className="text-2xl font-bold text-pink-500 regSuccess">🎉 Registration Successful! 🎉</h2>
                <p className="mt-1 text-gray-700 regSuccess2">
                    You’ve successfully registered for the birthday celebration!
                </p>
                {qrUrl && (
                    <>
                        <p className="mt-2 text-gray-700 regSuccess2">Here is your QR code:</p>
                        <div className="mt-4">
                            <img src={qrUrl} alt="QR Code" className="mx-auto w-48 h-48" />
                            <a
                                href={qrUrl}
                                download="qrcode.png"
                                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 Qrcodebutton"
                            >
                                Download QR Code
                            </a>
                        </div>
                    </>
                )}
                <button
                    onClick={onClose}
                    className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 button4"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
