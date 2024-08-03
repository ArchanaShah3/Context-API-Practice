import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-4 rounded-lg shadow-md text-center text-gray-700 text-lg mt-0">
                    Please Login
                </div>
            </div>

        )
    }
    return (
        <div className="flex items-center justify-center mt-0 bg-gray-100">
            <div className="bg-white p-4 rounded-lg shadow-md text-center text-gray-700 text-lg mt-0">
                Welcome {user.username}
            </div>
        </div>

    )
}

export default Profile
