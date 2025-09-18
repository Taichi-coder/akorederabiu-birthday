import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 guestBody2">
            <div className="guestBody flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
                <div>
                    <Link href="/">
                        {/* <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" /> */}
                        {/* <img src="..\favicon.png" alt="" className='favIcon1'/> */}
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-6 shadow-md sm:rounded-lg guestForm">
                    {children} 
                </div>
            </div>
        </div> 
    );
}
