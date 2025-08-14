function Table({users}){


    return(
        <div> 
            <table> 
                <thead>
                 <th> id</th>
                    <th> Email</th>
                    <th> Name</th>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>={user.id}</td>
                            <td>={user.email}</td> 
                               <td>={user.name}</td>
                    
                        </tr>

                    )
                    )}
                </tbody>
            </table>
        </div>

    );
}
export default Table;