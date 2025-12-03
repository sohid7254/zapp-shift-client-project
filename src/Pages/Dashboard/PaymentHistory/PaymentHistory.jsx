import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory =  () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <h2 className="text-4xl">Payment History {payments.length} </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL NO.</th>
                            <th>Parcel Info</th>
                            <th>tracking Id</th>
                            <th>Payment Info</th>
                            <th>Paid Time</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>Cy Ganderton</td>
                            <td>{payment.trackingId}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.paidAt}</td>
                            <td>Blue</td>
                            
                        </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;