import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { addUser } from "../redux/userReducer";
import {Link} from 'react-router-dom';

import { serverUrl } from '../utils';

const CreateUser = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const styles = {
        error:{
          color: "red"
        }
      }

      const navigate = useNavigate();

      const dispatch = useDispatch();

      const formSubmit = async(data: any) => {
        const resp = await axios.post(`${serverUrl}/user/createUser`,data);
        dispatch(addUser(resp.data));
        navigate("/");
      }

   return (
    <div className = 'd-flex w-100 justify-content-center align-items-center' style={{marginTop: "5%"}}>
      <div className = ' border p-5'>
      <Link to="/" className="btn btn-outline-primary btn-sm" style={{marginBottom: "5%"}}>Back</Link>
      <h5> Create User</h5>
        <form onSubmit={handleSubmit(formSubmit)}>
            <div> {/*// @ts-ignore */}
              <input className="action-firstName" {...register("firstName", { required: "First Name is required", maxLenth: 100, pattern: /^[A-Za-z]+$/i })} placeholder="First Name"/>
                  {errors.firstName?.type === "required" && (
                  <p style = {styles.error} role="alert">First name is required</p>
                )}
            </div><br />
            <div> {/*// @ts-ignore */}
            <input className="action-lastName" {...register("lastName", { required: "Last Name is required", maxLenth: 100, pattern: /^[A-Za-z]+$/i })} placeholder="Last Name"/>
                {errors.lastName?.type === "required" && (
                <p style = {styles.error} role="alert">Last name is required</p>
              )}
            </div><br />

            <div>
              <input className="action-email" {...register("emailId", { required: "Email Address is required", validate: {
                  maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                  matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                  },  })} placeholder="Email Id"/>
                   {/*// @ts-ignore */}
                  {errors.emailId && <p style = {styles.error} role="alert">{errors.emailId?.message}</p>}
            </div> <br />

            <input className="btn btn-primary" style={{marginLeft: "30%", marginTop: "5%"}} type="submit" />
          </form>
        </div>
      </div>
  )
}

export default CreateUser;