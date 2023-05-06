import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";

function SearchProfileResults() {

    const { searchby, keyword } = useParams();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        function getUsers() {
            axios.get(`http://localhost:4000/api/users/search/${searchby}/${keyword}`).then((res) => {
                console.log(res.data);
                setUsers(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }

        getUsers();
    }, [])
    return (
        <>
            <Layout >
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ fontSize: "13px" }}>
                        <tr class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <th class="px-6 py-3">Username</th>
                            <th class="px-6 py-3">First Name</th>
                            <th class="px-6 py-3">Last Name</th>
                            <th class="px-6 py-3">Mobile</th>
                            <th class="px-6 py-3">Active/Inactive</th>
                        </tr>

                        <tbody>
                            {users.map((user) => (
                                <tr>
                                    <td class="px-6 py-4">{user.username}</td>
                                    <td class="px-6 py-4">{user.first_name}</td>
                                    <td class="px-6 py-4">{user.last_name}</td>
                                    <td class="px-6 py-4">{user.mobile}</td>
                                    <td class="px-6 py-4">{user.active}</td>
                                    <td><button  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"  onClick={() => {
                                        window.location.replace(`http://localhost:3000/view-public-profile/${user._id}`);
                                    }}>View <i class="fa fa-eye" /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </>
    )

}

export default SearchProfileResults;