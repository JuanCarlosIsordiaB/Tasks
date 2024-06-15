import { Divide, Plus, PlusCircle, PlusCircleIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";


const NavBar = () => {
    return (  
        <nav className="flex justify-between p-4">
            <h1>Crud</h1> 
            <div className="flex items-center gap-3">
                <Link href="/new" className="flex items-center bg-indigo-500 py-3 px-2 rounded-md text-m hover:bg-indigo-800 transition-all "> <PlusCircle className="pr-1 text-white w-4 h-4"/> <p className="text-xs text-white">Add Task</p></Link>
                <ModeToggle/>
            </div>
            
        </nav>
    );
}
 
export default NavBar;