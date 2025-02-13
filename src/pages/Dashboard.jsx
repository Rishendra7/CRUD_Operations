import React from 'react'

const Dashboard = () => {
return (
    <form>
        <label>Username: <input type="text" name="username" required/></label>
        <br /><br />
        <label>Email: <input type="email" name="email" required /> </label>
        <br /><br />
        <label>Password: <input type="password" name="password" required /> </label>
        <br /><br />
        <label>
            Gender:
            <input
                type="radio"
                name="gender"
                value="Male"
            /> Male
            <input
                type="radio"
                name="gender"
                value="Female"
            /> Female
            <input
                type="radio"
                name="gender"
                value="Other"
            /> Other
        </label>
        <br /><br />
        <label>Address:<input type="text" name="address" required/> </label>
        <br /><br />
        <label>Upload File:<input type="file" name="file"/> </label>
        <br /><br />
        <label for="country">Country:</label>
        <select name="country" id="countryid">
          
            <option value="America">America</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
        </select>
        <br />
        <button type="submit">Submit</button>
    </form>
);
}

export default Dashboard