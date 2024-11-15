import React from "react";



const Page10 = ()=>{


return (

    <>
   
   <section className="Dashboard">
                <div className="main-Dashboard">

                    <table className="table-cont__h table-cont__h-alt-2">

                        <tr>
                            <th>No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-active__link">Active</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-inactive__link">InActive</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-active__link">Active</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-inactive__link">InActive</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-active__link">Active</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-inactive__link">InActive</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-active__link">Active</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Jordan</td>
                            <td>Smith</td>
                            <td>1234598765</td>
                            <td>Jordan@gmail.com</td>
                            <td>Trainer</td>
                            <td><a href="#" className="table-inactive__link">InActive</a></td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M4 18C4 16.9391 4.42143 15.9217 5.17157 15.1716C5.92172 14.4214 6.93913 14 8 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"
                                        stroke="#FF9D0B" stroke-width="1.5" stroke-linejoin="round" />
                                    <path
                                        d="M12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10Z"
                                        stroke="#FF9D0B" stroke-width="1.5" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="#2ADB7B"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="#F72B50" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                    fill="none">
                                    <rect width="24" height="24" fill="#FEDFE5" />
                                    <path
                                        d="M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19M6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19V7H6V19Z"
                                        fill="#F72B50" />
                                </svg>
                            </td>
                        </tr>

                    </table>

                </div>
    </section>
    </>


)



}


export default Page10