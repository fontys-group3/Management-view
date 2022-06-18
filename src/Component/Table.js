import React from "react";

function Table({orders, colNames, width ='auto', height='auto'}) {
    return(
        <div style={{ width: '50%', boxShadow: "3px 6px 4px #ccc"}}>
            {orders.length > 0 && (
                <table cellSpacing="0" style={{width: '100%', height: height, padding: '5px 10px'}}>
                    <thead style={{backgroundColor: "black", color: "white"}}>
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>
                                    {headerItem}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(orders).map((obj, index) => (
                            <tr>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            )}
        </div>
    )
}

export default Table