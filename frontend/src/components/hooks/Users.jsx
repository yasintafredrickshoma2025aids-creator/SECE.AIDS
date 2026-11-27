
import React, { useState, useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                )

                if (!response.ok) {
                    throw new Error('Failed to fetch users.')
                }

                const data = await response.json()
                setUsers(data)
            } catch (requestError) {
                setError(
                    requestError instanceof Error
                        ? requestError.message
                        : 'Failed to fetch users.'
                )
            } finally {
                setLoading(false)
            }
        }

        getUsers()
    }, [])

    if (loading) {
        return <p>Loading users...</p>
    }

    if (error) {
        return <p role="alert">Error: {error}</p>
    }

    return (
        <React.Fragment>
            <div style={{ width: '100%', overflowX: 'auto' }}>
                <table
                    style={{
                        width: '100%',
                        minWidth: '320px',
                        tableLayout: 'fixed',
                        borderCollapse: 'collapse',
                        backgroundColor: '#fff',
                        textAlign: 'left',
                    }}
                >
                    <thead>
                        <tr style={{ borderBottom: '1px solid #ddd' }}>
                            <th
                                scope="col"
                                style={{ width: '50%', padding: '12px 16px' }}
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                style={{ width: '50%', padding: '12px 16px' }}
                            >
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                style={{ borderBottom: '1px solid #ddd' }}
                            >
                                <td style={{ padding: '12px 16px' }}>
                                    {user.name}
                                </td>
                                <td style={{ padding: '12px 16px' }}>
                                    {user.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Users
