import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get("session_id");
    const axiosSecure = useAxiosSecure();
    const [paymentInfo, setPaymentInfo] = useState({})

    console.log(sessionId)

    useEffect(() => {
        if(sessionId){
            axiosSecure.patch(`/payment-succes?session_id=${sessionId}`)
             .then(res => {
                console.log(res.data)
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                    trackingId: res.data.trackingId
                });
             })
        }
    }, [sessionId, axiosSecure])


        return (
        <div>
            <h2 className='dtext-4xl'>Payment Successfu;ll</h2>
            <p>Your transactionId id {paymentInfo.transactionId}</p>
            <p>Your Parcel tracking Id is {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;