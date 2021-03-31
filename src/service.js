

import axios from 'axios';


export const Month = ["January", 
                "February", 
                "March", 
                "April", 
                "May", 
                "June", 
                "July", 
                "August", 
                "September", "October", "November", "December"];

export const Weekday = ["Sunday", 
"Monday", 
"Tuesday", 
"Wednesday", 
"Thursday", 
"Friday", 
"Saturday"];


const Instance = axios.create();

Instance.defaults.baseURL = 'http://localhost:3000/' || "";
Instance.defaults.headers.common["Content-Type"] =
    "application/json";
//Instance.defaults.headers.common = {'Authorization': `Bearer ${token}`}
//Instance.defaults.headers.common["Authorization"]= {'Authorization': `Bearer ${token}`}

export default Instance;