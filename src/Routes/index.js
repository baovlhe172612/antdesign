import LayoutDefault from "../Layout/LayoutDefault";
import BookRoom from "../page/BookRoom";
import CreateRoom from "../page/CreateRoom";
import Dashboard from "../page/DashBoard";
import ListRoom from "../page/ListRoom";


export const routes = [

    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },

            {
                path: "/bookroom",
                element: <BookRoom />
            },

            {
                path: "/create-room",
                element: <CreateRoom />
            },

            {
                path: "/list-room",
                element: <ListRoom />
            },
           

        ]
    }
]