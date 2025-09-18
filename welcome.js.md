## Welcome.jsx
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import SuccessPopup from "@/Components/SuccessPopup";
import './app.css';

const industries = [
    'Process industries',
    'Consumer non durable',
    'Fashion',
    'Aerospace',
    'Automotive',
    'Food services',
    'Healthcare',
    'Insurance',
    'Tech',
    'Oil and gas',
    'Construction',
    'Travel and tourism',
    'Media and telecoms',
    'Sport',
    'Retail and apparel',
    'Defense and security',
    'Power',
    'Financial services',
    'Mining',
    'Packaging',
    'Others',
]

export default function Welcome({ }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
  
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        organization: '',
        designation: '',
        industry: '',
        attendance: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Carbon Market"/>
            <div className="text-black/50 body">
                {/* <header className="bg-white shadow fixed header">
                    <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center fixed w-full bg-white shadow headerDiv max-w-screen-2xl">
                        <h1 className="text-xl font-bold">Carbon Market</h1>
                        <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-xl xl:hidden"
                        >
                        ☰
                        </button>
                        <nav className="hidden xl:flex gap-4">
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            Contact
                        </a>
                        </nav>
                    </div>
          {menuOpen && (
            <div className="xl:hidden bg-white-100  pb-4 pt-14 hid1">
              <a href="#" className="block py-3">
                Home
              </a>
              <a href="#" className="block py-3">
                About
              </a>
              <a href="#" className="block py-3">
                Contact
              </a>
            </div>
          )}
        </header> */}        

        <div className="relative flex min-h-screen selection:bg-[#FF2D20] selection:text-white">
            <div className="relative w-full max-w-screen-2xl ">
                
            <main className="main3">
                {/* <div className="firstmain">
                    <div className="overAll">
                    {<img src="\images\Birthday1.jpg" alt="" className='img1' />}
                    </div>
                </div> */}

                {!showForm && (
                <div className="card1">
                    <img src="\images\Birthday1.jpg" alt="" className="img7" />
                    <img src="\images\happyBD.jpg" alt="" className="img8" />
                    <button className="button5" onClick={() => setShowForm(true)} >Register Now</button>
                </div>
                )}
                {showForm && (
                <div className="shadow shadowxl shadow-gray-500/50 shadow1 ">
                    <div className="md:w-3/4 lg:w-3/4 mx-auto my-5  py-3 px-5 form1">
                        {/* <img src="/images/bg.jpg" alt="" className='h-auto w-full rounded-t' /> */}

                        <h2 className='regist display-5'>Register Now</h2>
                        <div className="borderLine mb-3"></div>
                        <div className='p-3'>
                            {
                                recentlySuccessful && <div className='p-3 bg-green-500 text-white rounded mb-4'>
                                    Thank you for registring for ESG 2024
                                </div>
                            }
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="Fullname" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="email" value="Email Address" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="phone" value="Phone Number" className="mb-2" />

                                    <PhoneInput
                                        id="phone"
                                        defaultCountry="ng"
                                        value={data.phone}
                                        onChange={(phone) => setData('phone', phone)}
                                        inputProps={{
                                            name: 'phone',
                                            autoComplete: 'tel', 
                                            required: true,
                                            id: 'phone'
                                        }}
                                        inputClassName=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 phoneInput1"
                                    />

                                    <InputError message={errors.phone} className="mt-2"/>
                                </div>

                                {/* <div className='mt-4'>
                                    <InputLabel htmlFor="nationality" value="Nationality" />

                                    <TextInput
                                        id="nationality"
                                        type="text"
                                        name="nationality"
                                        value={data.nationality}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('nationality', e.target.value)}
                                    />

                                    <InputError message={errors.nationality} className="mt-2" />
                                </div> */}

                                {/* <div className='mt-4'>
                                    <InputLabel htmlFor="organization" value="Organization" />

                                    <TextInput
                                        id="organization"
                                        type="text"
                                        name="organization"
                                        value={data.organization}
                                        className="mt-1 block w-full "
                                        onChange={(e) => setData('organization', e.target.value)}
                                    />

                                    <InputError message={errors.organization} className="mt-2" />
                                </div> */}

                                {/* <div className='mt-4'>
                                    <InputLabel htmlFor="designation" value="Designation" />

                                    <TextInput
                                        id="designation"
                                        type="text"
                                        name="designation"
                                        value={data.designation}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('designation', e.target.value)}
                                    />

                                    <InputError message={errors.designation} className="mt-2" />
                                </div> */}

                               {/*  <div className='mt-4'>
                                    <InputLabel htmlFor="industry" value="Industry" />
                                    <SelectInput 
                                        id="industry"
                                        className="w-full"
                                        name="industry"
                                        options={industries}
                                        onChange={(e) => setData('industry', e.target.value)}
                                    />
            
                                    <InputError message={errors.industry} className="mt-2" />
                                </div> */}

                                {/* <div className="mt-4">
                                    <InputLabel htmlFor="attendance" value="Attending Physically OR Virtually" />

                                    <SelectInput 
                                        id="attendance"
                                        className="w-full"
                                        name="attendance"
                                        options={['Virtually', 'Physically']}
                                        onChange={(e) => setData('attendance', e.target.value)}
                                    />

                                    <InputError message={errors.attendance} className="mt-2" />
                                </div> */}

                                <div className="mt-6 flex items-center justify-end">
                                    <button className="py-2 px-10 rounded-lg bg-sky-500 text-white " disabled={processing}>
                                        Attend Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    )}
                    </main>                      
                </div>
            </div>
        </div>

        <footer>

        </footer>
        </>
    );
}

## App.css
@import url(https://fonts.bunny.net/css?family=abeezee:400);
@import url(https://fonts.bunny.net/css?family=alfa-slab-one:400);
@import url(https://fonts.bunny.net/css?family=akshar:700);

.body {
    font-family: 'ABeeZee', sans-serif;
    width: 100%;
}

.header {
    position: fixed;
    z-index: 1;
    opacity: 0.8;
    width: 100%;
    font-family: 'ABeeZee', sans-serif;
    top: 0;
}

.headerDiv {
    width: 100%;
}

.hid1 {
    margin-top: 2rem;
    height: 230px;
}

.hid1 a {
    text-decoration: none;
    color: rgb(63, 63, 63);
    display: block;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: end;
    border-bottom: 2px solid rgba(63, 63, 63, 0.651);
    padding: 1rem 1rem;
}

.hid1 a:last-child {
    border: none;
}

.hid1 a:hover {
    color: black;
}

.regist {
    font-size: 2.5rem;
    text-align: center;
    margin-top: 1rem;
    color: #257a2c;
    font-weight: 500;
    font-family: 'Akshar', sans-serif;
}

.borderLine {
    width: 10%;
    height: 5px;
    background-color: #257a2c;
    margin-top: 0.2rem;
    margin-inline: auto;
}

.firstmain {
    position: relative;
    max-width: 100%;
    min-height: 128vh;
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    background-size: 130%;
    margin-bottom: 3rem;
}

.overAll {
    max-width: 100%;
    height: 120vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2.5rem;
}

.img1 {
    width: 90%;
    height: 100vh;
    border-radius: 0.5rem;
    margin-inline: auto;
} 

.shadow1 {
    width: 90%;
    margin-inline: auto;
    border: 1px solid rgba(0, 0, 0, 0.116);
    border-radius: 20px;
    width: 90%;
    height: 100vh;
    border-radius: 0.5rem;
}

.form1 {
    border-radius: 17px;
    background-color: rgba(0, 0, 0, 0.39);
}

.main3 {
    background-color: rgb(252, 252, 252);
}

.img7 {
    position: absolute;
    width: 352px;
    height: 320px;
    top: 125px;
    left: 606px;
}

.img8 {
    margin: 0 auto;
    width: 700px;
    height: 835px;
}

.button5 {
    position: absolute;
    top: 47rem;
    right: 36rem;
    background-color: white;
    color:  #1b2b61ec;
    padding: 0.4rem 1rem;
    border-radius: 0.375rem; /* Tailwind's rounded-md */
    font-size: 2.6rem; /* text-lg */
    font-weight: 300; /* font-medium */
    cursor: pointer;
    font-family: 'Akshar', sans-serif;
}

.button5:hover {
    background-color: #1b2b6149;
    color: white;
    transition: all 0.3s ease-in-out;
}

/* Wrapper */
.PhoneInput {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #d1d5db; /* Tailwind's border-gray-300 */
    border-radius: 0.375rem;    /* Tailwind's rounded-md */
    padding: 10.5rem;
    background-color: white;
}

/* Country selector (flag + code) */
.PhoneInputCountry {
    display: flex;
    align-items: center;
    gap: 0.25rem; /* space between flag and +234 */
    margin-right: 10.5rem;
}

/* Dropdown select for country */
.PhoneInputCountrySelect {
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
}

/* Actual phone number input */
.PhoneInputInput {
    flex: 1;
    border: none;
    outline: none;
    font-size: 0.875rem; /* text-sm */
    color: #374151;      /* text-gray-700 */
}

/* Focus ring */
.PhoneInput:focus-within {
    border-color: #6366f1; /* Tailwind's indigo-500 */
    box-shadow: 0 0 0 1px #6366f1;
}


@media screen and (min-width: 300px) {
  .img1 {
    width: 96%;
    height: 57vh;
  }

  .firstmain {
    position: relative;
    max-width: 100%;
    min-height: 35vh;
    background-image: url('/public/images/bg.jpg');
    background-size: 300%;
    margin-bottom: 4rem;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
}

.overAll {
    max-width: 100%;
    max-height: 80vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6rem;
}
} 

@media screen and (min-width: 430px) {
  .img1 {
    width: 96%;
    height: 57vh;
  }

  .firstmain {
    position: relative;
    max-width: 100%;
    max-height: 91vh;
    background-image: url('/public/images/bg.jpg');
    background-size: 300%;
    margin-bottom:4rem;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
}

.overAll {
    max-width: 100%;
    max-height: 80vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
}
} 

/*  || MEDIUM  */
@media screen and (min-width: 668px) {
    .img1 {
        width: 96%;
        min-height: 70vh;
    }

    .firstmain {
        background: url('/public/images/bg.jpg');
        background-size: 90%;
        min-height: 93vh;
        margin-bottom: 7rem;
        background-size: cover;
    }

    .overAll {
    max-width: 100%;
    min-height: 95vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
}
} 

/*  || LARGE */
@media screen and (min-width: 992px) {
   .firstmain {
    position: relative;
    max-width: 100%;
    min-height: 99vh;
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    background-size: 100%;
    margin-bottom: 7rem;
}

.overAll {
    max-width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.img1 {
    width: 96%;
    min-height: 80vh;
    border-radius: 0.5rem;
    margin-inline: auto;
}
}

@media screen and (min-width: 1200px) {
    .firstmain {
    position: relative;
    max-width: 100%;
    min-height: 115vh;
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    background-size: 130%;
    margin-bottom: 7rem;
}

.overAll {
    max-width: 100%;
    min-height: 115vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
}

.img1 {
    width: 96%;
    min-height: 90vh;
    border-radius: 0.5rem;
    margin-inline: auto;
}
} 

@media screen and (min-width: 1300px) {
    .firstmain {
    position: relative;
    max-width: 100%;
    max-height: 125vh;
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    background-size: 130%;
    margin-bottom: 8rem;
}

.overAll {
    max-width: 100%;
    max-height: 150vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
}

.img1 {
    width: 95%;
    max-height: 100vh;
    border-radius: 0.5rem;
    margin-inline: auto;
}

}

@media screen and (min-width: 1500px) {
    .firstmain {
    position: relative;
    max-width: 100%;
    max-height: 125vh;
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    background-size: 130%;
    margin-bottom: 8rem;
}

.overAll {
    max-width: 100%;
    max-height: 150vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
}

.img1 {
    width: 95%;
    max-height: 100vh;
    border-radius: 0.5rem;
    margin-inline: auto;
}

}

/*  || MOBILE DEVICE LANDSCAPE */
@media screen and (max-height: 425px) and (min-aspect-ratio: 7/4) {
     .firstmain {
    position: relative;
    max-width: 100%;
    height: 160vh;
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    background-size: 100%;
    margin-bottom: 1rem;
}

.overAll {
    max-width: 100%;
    height: 175vh;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.733);
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.img1 {
    width: 95%;
    height: 92vh;
    border-radius: 0.5rem;
    margin-inline: auto;
}
}

.button2 {
    font-size: 1.7rem;
    font-weight: 700;
    top: 0.7rem;
}
    
.favIcon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}

.favIcon1 {
    width: 7rem;
    height: 7rem;
    border-radius: 10%;
}

.guestBody {
    background-color: rgba(128, 128, 128, 0.514);
    width: 100%;
}

.guestBody2 {
    background: url('/public/images/bg.jpg') no-repeat center center/cover;
    width: 100%;
}

.guestForm {
    width: 40%;
}

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './app.css';

const industries = [
    'Process industries',
    'Consumer non durable',
    'Fashion',
    'Aerospace',
    'Automotive',
    'Food services',
    'Healthcare',
    'Insurance',
    'Tech',
    'Oil and gas',
    'Construction',
    'Travel and tourism',
    'Media and telecoms',
    'Sport',
    'Retail and apparel',
    'Defense and security',
    'Power',
    'Financial services',
    'Mining',
    'Packaging',
    'Others',
]

export default function Welcome({ }) {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        organization: '',
        designation: '',
        industry: '',
        attendance: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Carbon Market"/>
            <div className="text-black/50 body">
                {/* <header className="bg-white shadow fixed header">
                    <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center fixed w-full bg-white shadow headerDiv max-w-screen-2xl">
                        <h1 className="text-xl font-bold">Carbon Market</h1>
                        <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-xl xl:hidden"
                        >
                        ☰
                        </button>
                        <nav className="hidden xl:flex gap-4">
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            About
                        </a>
                        <a href="#" className="text-gray-700 hover:text-black text-decoration-none">
                            Contact
                        </a>
                        </nav>
                    </div>
          {menuOpen && (
            <div className="xl:hidden bg-white-100  pb-4 pt-14 hid1">
              <a href="#" className="block py-3">
                Home
              </a>
              <a href="#" className="block py-3">
                About
              </a>
              <a href="#" className="block py-3">
                Contact
              </a>
            </div>
          )}
        </header> */}        

        <div className="relative flex min-h-screen selection:bg-[#FF2D20] selection:text-white">
            <div className="relative w-full max-w-screen-2xl ">
                
            <main className="main3">
                {/* <div className="firstmain">
                    <div className="overAll">
                    {<img src="\images\Birthday1.jpg" alt="" className='img1' />}
                    </div>
                </div> */}

                <div className="card1">
                    {/* <img src="\images\Birthday1.jpg" alt="" className="img7" />
                    <img src="\images\happyBD.jpg" alt="" className="img8" /> */}
                </div>
            
                <div className="shadow shadowxl shadow-gray-500/50 shadow1 ">
                    <div className="md:w-3/4 lg:w-3/4 mx-auto my-5  py-3 px-5 form1">
                        {/* <img src="/images/bg.jpg" alt="" className='h-auto w-full rounded-t' /> */}

                        <h2 className='regist display-5'>Register Now</h2>
                        <div className="borderLine mb-3"></div>
                        <div className='p-3'>
                            {
                                recentlySuccessful && <div className='p-3 bg-green-500 text-white rounded mb-4'>
                                    Thank you for registring for ESG 2024
                                </div>
                            }
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel htmlFor="name" value="Fullname" />

                                    <TextInput
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="email" value="Email Address" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="phone" value="Phone Number" className="mb-2" />

                                    <PhoneInput
                                        id="phone"
                                        defaultCountry="ng"
                                        value={data.phone}
                                        onChange={(phone) => setData('phone', phone)}
                                        inputProps={{
                                            name: 'phone',
                                            autoComplete: 'tel', 
                                            required: true,
                                            id: 'phone'
                                        }}
                                        inputClassName=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 phoneInput1"
                                    />

                                    <InputError message={errors.phone} className="mt-2"/>
                                </div>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="nationality" value="Nationality" />

                                    <TextInput
                                        id="nationality"
                                        type="text"
                                        name="nationality"
                                        value={data.nationality}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('nationality', e.target.value)}
                                    />

                                    <InputError message={errors.nationality} className="mt-2" />
                                </div> 

                                <div className='mt-4'>
                                    <InputLabel htmlFor="organization" value="Organization" />

                                    <TextInput
                                        id="organization"
                                        type="text"
                                        name="organization"
                                        value={data.organization}
                                        className="mt-1 block w-full "
                                        onChange={(e) => setData('organization', e.target.value)}
                                    />

                                    <InputError message={errors.organization} className="mt-2" />
                                </div>

                                 <div className='mt-4'>
                                    <InputLabel htmlFor="designation" value="Designation" />

                                    <TextInput
                                        id="designation"
                                        type="text"
                                        name="designation"
                                        value={data.designation}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('designation', e.target.value)}
                                    />

                                    <InputError message={errors.designation} className="mt-2" />
                                </div>

                               <div className='mt-4'>
                                    <InputLabel htmlFor="industry" value="Industry" />
                                    <SelectInput 
                                        id="industry"
                                        className="w-full"
                                        name="industry"
                                        options={industries}
                                        onChange={(e) => setData('industry', e.target.value)}
                                    />
            
                                    <InputError message={errors.industry} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="attendance" value="Attending Physically OR Virtually" />

                                    <SelectInput 
                                        id="attendance"
                                        className="w-full"
                                        name="attendance"
                                        options={['Virtually', 'Physically']}
                                        onChange={(e) => setData('attendance', e.target.value)}
                                    />

                                    <InputError message={errors.attendance} className="mt-2" />
                                </div>

                                <div className="mt-6 flex items-center justify-end">
                                    <button className="py-2 px-10 rounded-lg bg-sky-500 text-white " disabled={processing}>
                                        Attend Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    </main>                      
                </div>
            </div>
        </div>

        <footer>

        </footer>
        </>
    );
}

import Checkbox from '@/Components/Checkbox';
import PageLink from '@/Components/PageLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import './app.css';

export default function Dashboard({ models = { total: 0, data: [], links: [] }, virtuals = 0 , physicals = 0 }) {

    const [query, setQuery] = useState('');
    const [selectedUsers, setUsers] = useState([]);

    const sendQr = () => {
        let IDs = selectedUsers;
        if (IDs.length) {
            router.post(route('send'), { ids: IDs }, {
                onSuccess: () => {
                    setUsers([]);
                }
            });
        }
    };

    const onChecked = (model) => {
        let users = [...selectedUsers];
        let index = users.findIndex(item => item === model.id);
        if (index === -1) {
            if (users.length >= 5) {
                alert('Select only 5 persons at a time to send SMS to');
            } else {
                users.push(model.id);
            }
        } else {
            users.splice(index, 1);
        }

        setUsers(users);
    };

    const doFilter = (e) => {
        let { value } = e.target;
        setQuery(value);
    };

    useEffect(() => {
  router.get('/dashboard', {
    search: query, 
  }, {
    preserveState: true,
    replace: true,
  });
}, [query]);


    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='md:flex justify-between mb-4 gap-4 lg:px-0 p-4 items-center'>
                        <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Total</p>
                            <h4 className='font-bold text-xl'>{models?.total ?? 0}</h4>
                        </div>

                        <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Virtuals</p>
                            <h4 className='font-bold text-xl'>{virtuals ?? 0}</h4>
                        </div>
                        
                        <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Physical</p>
                            <h4 className='font-bold text-xl'>{physicals ?? 0}</h4>
                        </div>

                        <div className="basis-2/6 text-end mb-6">
                            <button onClick={sendQr}>Send QR</button>
                            <a href="/dashboard/export-qr" className="bg-sky-500 rounded ms-6 px-3 py-2 text-white">Export Data</a>
                        </div>
                    </div>
                    <div className="basis-2/6 text-end mb-6 relative">
                        <input
                            type="text"
                            placeholder="Search name, email, industry, or nationality"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="border p-2 mb-4 rounded w-full md:w-1/3"
                        />

                        {query && (
                            <button
                            onClick={() => setQuery('')}
                            className="-translate-y-1/2 text-gray-500 hover:text-red-500 absolute top-2 right-2 mt-2 mr-4 button2"
                            >
                            &times; {/* This is the "X" character */}
                            </button>
                        )}
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm mx-4 lg:mx-0 rounded">
                        <div className="p-2 flex gap-2 items-center text-sm">
                            Filter By
                            <select onChange={doFilter} className="border border-sky-500 text-sm rounded bg-white outline-none">
                                <option value="all">All</option>
                                <option value="physically">Physical Attendance</option>
                                <option value="virtually">Virtual Attendance</option>
                            </select>
                        </div>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Designation</th>
                                        <th scope="col" className="px-6 py-3">Industry</th>
                                        <th scope="col" className="px-6 py-3">Nationality</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        models?.data?.map((model, index) => (
                                            <tr className="bg-white border-b" key={index}>
                                                <td className="px-6 py-4">{index + 1}</td>
                                                <td className="px-6 py-4">{model.name}</td>
                                                <td className="px-6 py-4">{model.email}</td>
                                                <td className="px-6 py-4">{model.designation || 'N/A'}</td>
                                                <td className="px-6 py-4">{model.industry || 'N/A'}</td>
                                                <td className="px-6 py-4">{model.nationality || 'N/A'}</td>
                                                <td className="px-6 py-4">
                                                    <Checkbox onChange={() => onChecked(model)} />
                                                </td>
                                            </tr>
                                        ))
                                    }

                                    {
                                        models?.data?.length === 0 && (
                                            <tr>
                                                <td className='text-center pt-5' colSpan={8}>No Records Found</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='px-6 py-3'>
                            <PageLink links={models?.links ?? []}></PageLink>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

## App.css2


