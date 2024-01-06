import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export interface showHideProps {
}

export function ShowHideAction(props: showHideProps) {
    const [show, setShow] = useState<boolean>(false);
    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick} className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white sm:w-auto bg-cyan-500 shadow-lg shadow-cyan-500/50 mb-2">{show ? 'Hide' : 'Show'}</button>
            {show && (
                <div>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently
                                        removed. This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}