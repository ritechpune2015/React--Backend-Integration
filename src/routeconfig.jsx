import { Route, Routes } from "react-router-dom";
import { CustomerList } from "./components/CustomerList";
import { CustomerNew } from "./components/CustomerNew";
import { CustomerEdit } from "./components/CustomerEdit";
import { CustomerEditNew } from "./components/CustomerEditNew";

export function RouteConfig()
{
return (<>
<Routes>
     <Route path="/" element={<CustomerList />}></Route>
     <Route path="/new" element={<CustomerNew />}></Route>
     <Route path="/edit/:id" element={<CustomerEdit />}></Route>
     <Route path="/editnew/" element={<CustomerEditNew />}></Route>
</Routes>
</>);

}