export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return(
        <div className="cell__with__image">
          <img className="cell__image" src={params.row.img} alt="avatar" />
          { params.row.username }
        </div>
      )
    }
  },
  {field: 'email', headerName: "Email", width: 230 },
  {field: 'desc', headerName: "Description", width: 548 },
  {field: 'age', headerName: "Age", width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params) => {
      return(
        <div className={`cell__with__status ${params.row.status}`}>
         {params.row.status}
        </div>
      )
    }
  },
]



export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "active",
    email: "snow_1@gmail.com",
    age: 22
  },
  {
    id: 2,
    username: "Jacky",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "offline",
    email: "jacky_1@gmail.com",
    age: 28
  },
  {
    id: 3,
    username: "Benny",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "pending",
    email: "benny_1@gmail.com",
    age: 24
  },
  {
    id: 4,
    username: "Sainga",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "offline",
    email: "sainga_1@gmail.com",
    age: 32
  },
  {
    id: 5,
    username: "Patron",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "active",
    email: "patron_1@gmail.com",
    age: 18
  },
  {
    id: 6,
    username: "Crimson",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "pending",
    email: "crimson_1@gmail.com",
    age: 26
  },
  {
    id: 7,
    username: "Jiant",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "offline",
    email: "jiant_1@gmail.com",
    age: 20
  },
  {
    id: 8,
    username: "Teddly",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "active",
    email: "teddly_1@gmail.com",
    age: 25
  },
  {
    id: 9,
    username: "Brouno",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "pending",
    email: "brouno_1@gmail.com",
    age: 21
  },
  {
    id: 10,
    username: "Tony",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "active",
    email: "tony_1@gmail.com",
    age: 33
  },
  {
    id: 11,
    username: "Sneaky",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "active",
    email: "sneak_1@gmail.com",
    age: 27
  },
  {
    id: 12,
    username: "Wilson",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "offline",
    email: "wilson_1@gmail.com",
    age: 23
  },
  {
    id: 13,
    username: "Stephent",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "active",
    email: "stephent_1@gmail.com",
    age: 25
  },
  {
    id: 14,
    username: "Gina",
    img: "https://media.baamboozle.com/uploads/images/60525/1610707957_295264",
    status: "pending",
    email: "gina_1@gmail.com",
    age: 19
  },
]