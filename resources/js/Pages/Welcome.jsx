import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import SuccessPopup from "@/Components/SuccessPopup";
import './app.css';

export default function Welcome() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [qrUrl, setQrUrl] = useState(null);
    const [showForm, setShowForm] = useState(false);
    // 👇 inside your Welcome component:
const [showRegisterBtn, setShowRegisterBtn] = useState(true);

    const { flash } = usePage().props;

    console.log("FLASH DATA:", flash);


    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
    const toggleVisibility = () => {
    if (window.scrollY < 400) {
      setShowRegisterBtn(true); // at top show
    } else {
      setShowRegisterBtn(false); // hide when scrolled down
    }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    // ✅ Watch for qr_url from Laravel flash session
   useEffect(() => {
    if (flash && flash.qr_url) {
        // ✅ Save QR to state & show popup
        setQrUrl(flash.qr_url);
        setShowPopup(true);
        reset();

        // ✅ Auto-download logic
        const link = document.createElement("a");
        link.href = flash.qr_url;

        // Extract filename from URL (e.g., "0001.png")
        const fileName = flash.qr_url.split("/").pop() || "my-qr-code.png";
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    }, [flash]);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Rabiu Akorede Birthday"/>
            <div className="text-black/50 body">
           <header className="bg-white shadow fixed header">
                    <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center fixed w-full bg-white shadow headerDiv max-w-screen-2xl">
                        <h1 className="text-xl font-bold h11">Happy Birthday</h1>
                        <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-xl xl:hidden menuButton"
                        >
                        ☰
                        </button>
                        <nav className="hidden xl:flex gap-4 navR">
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            Home
                        </a>
                        <a href="#form2" onClick={() => setShowForm(!showForm)} className="text-gray-700 hover:text-black text-decoration-none">
                            Register
                        </a>
                        </nav>
                    </div>
          {menuOpen && (
            <div className="xl:hidden bg-white-100  pb-4 pt-14 hid1">
              <a href="#" className="block py-3">
                Home
              </a>
              <a href="#form2" onClick={() => setShowForm(!showForm)} className="block py-3">
                Register
              </a>
            </div>
          )}
        </header>

            {showPopup && (
                <SuccessPopup
                    qrUrl={qrUrl}
                    onClose={() => setShowPopup(false)}
                />
            )}


        <div className="relative flex min-h-screen selection:bg-[#FF2D20] selection:text-white">
            <div className="relative w-full body2">
                
            <main className="main3">
               <div className="sec2">
                    <div
                        id="carouselExampleInterval"
                        className="carousel slide relative"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="relative">
                            <img src="images/Photo1.jpg" className="d-block w-100" alt="..." />
                            {/* Button */}
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className={`absolute bottom-12 left-1/2 -translate-x-1/2 py-2 px-8 w-50 rounded-lg text-white shadow transition-all duration-500 registerButton z-20 ${
                                showRegisterBtn
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-5 pointer-events-none"
                                }`}
                            >
                                Register Now
                            </button>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <div className="relative">
                            <img src="images/Photo2.jpg" className="d-block w-100" alt="..." />
                            {/* Button */}
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className={`absolute bottom-12 left-1/2 -translate-x-1/2 py-2 px-8 w-50 rounded-lg text-white shadow transition-all duration-500 registerButton z-20 ${
                                showRegisterBtn
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-5 pointer-events-none"
                                }`}
                            >
                                Register Now
                            </button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="relative rella">
                            <img src="images/Photo3.jpg" className="d-block w-100" alt="..." />
                            {/* Button */}
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className={`absolute bottom-12 left-1/2 -translate-x-1/2 py-2 px-8 w-50 rounded-lg text-white shadow transition-all duration-500 registerButton z-20 ${
                                showRegisterBtn
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-5 pointer-events-none"
                                }`}
                            >
                                Register Now
                            </button>
                            </div>
                        </div>
                        </div>

                        {/* Controls */}
                        <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                        >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                        >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {showForm && (
                <div className="mx-3">
                    <div className="md:w-3/4 lg:w-3/4 mx-auto py-3 px-3 form1 shadow-lg">

                        <h2 className='regist display-5 '>Register Now</h2>
                        <div className="borderLine mb-3"></div>
                        <div className='p-3'>
                            <form onSubmit={submit} className='form2' id='form2'>
                                <div>
                                    <InputLabel htmlFor="name" value="Fullname" className='Input3' />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full input4"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="email" value="Email Address" className='Input3' />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full input4"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="phone" value="Phone Number" className="mb-2 Input3"  />

                                    <PhoneInput
                                        id="phone"
                                        defaultCountry="ng"
                                        value={data.phone}
                                        onChange={(phone) => setData('phone', phone)}                            
                                        inputProps={{
                                            name: 'phone',
                                            autoComplete: 'tel', 
                                            required: true,
                                            id: 'phone',

                                        }}
                                        inputClassName=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 !font-medium !text-black !pe-5  !text-[1rem] input4"
                                    />

                                    <InputError message={errors.phone} className="mt-2"/>
                                </div>
                                <p className='text-center mt-3 p3'>Join us in celebrating a special day filled with joy and laughter.</p>
                                <div className="mt-1 flex items-center justify-end">
                                    <button className="py-2 px-10 mt-3 rounded-lg bg-sky-500 text-white button3" disabled={processing}>
                                         Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
                )} 
                <footer>
            <div className="text-center allFooter p-4 mt-5 footer1 bg-white shadow-lg">
                <p className='text-lg event-det'>Events details</p>
                <div className="justify-between flex divide">
                    <div className="address"><i class="bi bi-geo-alt-fill"></i><a href="https://www.google.com/maps?q=Whitestone+Events+Place+3+Billings+Way+Oregun+Ikeja+Lagos+Nigeria" target="_blank" rel="noopener noreferrer">Whitestone Events Place - 3 Billings Way, Oregun, Ikeja, Lagos, Nigeria</a></div>
                    <time datetime="2025-10-19"> <i class="bi bi-calendar-date-fill"></i>October 19th, 2025</time>
                </div>
                <div className="divide">
                    <time datetime="2025-10-19T13:00"><i class="bi bi-clock-fill"></i>1:00 PM</time>
                    <div className='rsvp'>
                        <strong>RSVP:</strong><a href="tel:+2347083610035">0708 361 0035</a>, <a href="tel:+2349010932945">0901 093 2945</a>
                    </div>
                    
                </div>
                
                <p className='text-sm wristbands'>©2025 copyright <a href="https://www.wristbands.ng/"target='_blank' className='wristbands' >the wristbands company</a></p>
            </div>
        </footer>
            </main>                      
            </div> 
            </div>
            
        </div>
        </>
    );
}
/* Venue of event:Whitestone Events Place - 3 Billings Way, Oregun, Ikeja, Lagos, Nigeria.

Time:1pm

RSVP:0708 361 0035,0901 093 2945
 */
