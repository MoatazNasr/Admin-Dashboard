import { Div, Img, Button } from "./components/GlobalStyles";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import styled from "styled-components";
import { Link } from "react-router-dom";
const DivC = styled(Div)`
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: none;
`;
const ImgC = styled(Img)`
  width: 45px;
  aspect-ratio: 1/1;
  margin-right: 1rem;
`;

export const usersData = [
  {
    name: "Jan",
    users: 4000,
  },
  {
    name: "Feb",
    users: 3000,
  },
  {
    name: "Mars",
    users: 2000,
  },
  {
    name: "Apr",
    users: 2780,
  },
  {
    name: "May",
    users: 1890,
  },
  {
    name: "June",
    users: 2390,
  },
  {
    name: "July",
    users: 3490,
  },
  {
    name: "Aug",
    users: 1090,
  },
  {
    name: "Sep",
    users: 4590,
  },
  {
    name: "Oct",
    users: 5490,
  },
  {
    name: "Nov",
    users: 10490,
  },
  {
    name: "Dec",
    users: 2590,
  },
];
export const productData = [
  {
    name: "Jan",
    product: 0,
  },
  {
    name: "Feb",
    product: 5,
  },
  {
    name: "Mars",
    product: 8,
  },
];
export const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <DivC>
          <ImgC src={params.row.img} />
          {params.row.user}
        </DivC>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "transactions",
    headerName: "Transactions",
    width: 130,
  },
  {
    field: "action",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <DivC>
          <Link to={`/${params.row.id}`}>
            <EditOutlinedIcon sx={{ color: "green" }} />
          </Link>
          <Button>
            <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </DivC>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    email: "Snow@gmail.com",
    user: "Jon",
    status: "active",
    img: "/pexels-eyup-beyhan-7919753.jpg",
    transactions: "$120.00",
  },
  {
    id: 2,
    email: "Lannister@gmail.com",
    user: "Cersei",
    status: "active",
    img: "/pexels-eyup-beyhan-7919753.jpg",
    transactions: "$120.00",
  },
  {
    id: 3,
    email: "Lannister@gmail.com",
    user: "Jaime",
    status: "active",
    img: "/pexels-eyup-beyhan-7919753.jpg",
    transactions: "$120.00",
  },
  {
    id: 4,
    email: "Stark@gmail.com",
    user: "Arya",
    status: "active",
    img: "/pexels-eyup-beyhan-7919753.jpg",
    transactions: "$120.00",
  },
  {
    id: 5,
    email: "Targaryen@gmail.com",
    user: "Daenerys",
    status: "active",
    img: "/pexels-eyup-beyhan-7919753.jpg",
    transactions: "$120.00",
  },
];

export const productColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <DivC>
          <ImgC src={params.row.img} />
          {params.row.product}
        </DivC>
      );
    },
  },
  { field: "stock", headerName: "Stock", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "price",
    headerName: "Price",
    width: 130,
  },
  {
    field: "action",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      return (
        <DivC>
          <Link to={`/${params.row.id}`}>
            <EditOutlinedIcon sx={{ color: "green" }} />
          </Link>
          <Button>
            <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
          </Button>
        </DivC>
      );
    },
  },
];

export const productRows = [
  {
    id: 1,
    stock: 1,
    product: "Jacket",
    status: "active",
    img: "/61Q3vAe5LuL._AC_UX385_.jpg",
    price: "$120.00",
  },
  {
    id: 2,
    stock: 5,
    product: "Jacket",
    status: "active",
    img: "/61Q3vAe5LuL._AC_UX385_.jpg",
    price: "$120.00",
  },
  {
    id: 3,
    stock: 10,
    product: "Jacket",
    status: "active",
    img: "/61Q3vAe5LuL._AC_UX385_.jpg",
    price: "$120.00",
  },
  {
    id: 4,
    stock: 9,
    product: "Jacket",
    status: "active",
    img: "/61Q3vAe5LuL._AC_UX385_.jpg",
    price: "$120.00",
  },
  {
    id: 5,
    stock: 6,
    product: "Jacket",
    status: "active",
    img: "/61Q3vAe5LuL._AC_UX385_.jpg",
    price: "$120.00",
  },
  
];
