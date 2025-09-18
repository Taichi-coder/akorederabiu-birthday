/* import Checkbox from '@/Components/Checkbox';
import PageLink from '@/Components/PageLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Dashboard({models, virtuals}) {

    const [query, setQuery] = useState('');
    const [selectedUsers, setUsers] = useState([]);
    
    const sendQr = () => {
        let IDs  = selectedUsers;
        if(IDs.length) {
            router.post(route('send'), {ids: IDs}, {
                onSuccess: () => {
                    setUsers([])
                }
            })
        }
    }

    const onChecked = (model) => {
        let users = selectedUsers;
        let index = users.findIndex(item => item == model.id);
        if(index == -1) {
            if(users.length >= 5) {
                alert('Select only 5 persons at a time to send SMS to')
            }
            else users.push(model.id);
        }
        else {
            users.splice(index, 1);
        }

        setUsers(users);
    }

    const doFilter = (e) => {
        let {value} = e.target;
        setQuery(value)
    }

    useEffect(() => {
        if(query) {
             router.get('/dashboard', {attendance: query},
                 {
                    preserveState: true,
                    replace: true,
                 }
             );
        }
     }, [query])

     console.log(models);
     
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='md:flex justify-between mb-4 gap-4 lg:px-0 p-4 items-center'>
                        <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Total</p>
                            <h4 className='font-bold text-xl'>{models.total}</h4>
                        </div>

                        <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Vituals</p>
                            <h4 className='font-bold text-xl'>{virtuals}</h4>
                        </div>

                        <div class="basis-2/6 text-end mb-6">
                            <button onClick={sendQr}>Send QR</button>
                            <a href="/dashboard/export-qr" className="bg-sky-500 rounded ms-6 px-3 py-2 text-white">Export Data</a>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm mx-4 lg:mx-0 rounded">
                        <div className="p-2 flex gap-2 items-center text-sm">
                            Filter By 
                            <select onChange={doFilter} className="border border-sky-500 text-sm rounded bg-white outline-none">
                                <option value="all">All</option>
                                <option value="physically">Phyical Attendance</option>
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
                                        models?.data.map((model, index) => {
                                            return (
                                                <tr className="bg-white border-b" key={index}>
                                                    <td className="px-6 py-4"> {index + 1} </td>
                                                    <td className="px-6 py-4"> {model.name} </td>
                                                    <td className="px-6 py-4"> {model.email} </td>
                                                    <td className="px-6 py-4"> {model.designation || 'N/A'} </td>
                                                    <td className="px-6 py-4"> {model.industry || 'N/A'} </td>
                                                    <td className="px-6 py-4"> {model.nationality || 'N/A'} </td>
                                                    <td className="px-6 py-4">
                                                        <Checkbox onChange={() => onChecked(model)}></Checkbox>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    {
                                        models.data.length == 0 && (<tr>
                                            <td className='text-center pt-5' colSpan={8}>No Records Found</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='px-6 py-3'>
                            <PageLink links={models.links}></PageLink>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
} */

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

    const doSearch = () => {
        router.get('/dashboard', { search: query }, {
            preserveState: true,
            replace: true,
        });
    };


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

                        {/* <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Virtuals</p>
                            <h4 className='font-bold text-xl'>{virtuals ?? 0}</h4>
                        </div>
                        
                        <div className='px-4 w-full basis-2/6 border bg-white p-5 mb-4 rounded'>
                            <p>Physical</p>
                            <h4 className='font-bold text-xl'>{physicals ?? 0}</h4>
                        </div> */}

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

                        <button
                            onClick={doSearch}
                            className="px-3 py-2 bg-sky-500 text-white rounded"
                        >
                            Search
                        </button>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm mx-4 lg:mx-0 rounded">
                        <div className="p-2 flex gap-2 items-center text-sm">
                            Filter By
                            <select onChange={doFilter} className="border border-sky-500 text-sm rounded bg-white outline-none">
                                <option value="all">All</option>
                                {/* <option value="physically">Physical Attendance</option>
                                <option value="virtually">Virtual Attendance</option> */}
                            </select>
                        </div>

                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">#</th>
                                        <th scope="col" className="px-6 py-3">Name</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">Phone Number</th>
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
                                                <td className="px-6 py-4">{model.phone || 'N/A'}</td>
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
