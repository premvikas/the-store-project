import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/redux-hooks";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {getUser} from '../redux/userReducer';

import { serverUrl } from '../utils';

const Users = () => {

    const dispatch = useAppDispatch();
   
    const users:[] = useAppSelector((state: {users: any}) => state.users.users);  

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(`${serverUrl}/user/getUsers`);
                dispatch(getUser(response.data));

            } catch(err){
                console.log(err)
            }
        }
        fetchData();
    },[]);

    return(
        <div className="container">
        <h3 style={{textAlign: 'center', marginTop: '2%'}}> Users List</h3>
        <Link to="/create" className="btn btn-outline-primary btn-lg" style={{marginBottom: "2%"}}>Create User</Link>
        <table className="table table-striped table-hover table-bordered border-info align-middle caption-top table-responsive">
            <thead className="thead-light" style={{fontStyle:"normal"}}>
                <tr className='table-primary'>
                    <th className='w-10'>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user:any, index:any) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.emailId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default Users;