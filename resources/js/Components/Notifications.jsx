import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';

const Notifications = () => {
    const { notifications } = usePage().props;
    const [notificationList, setNotificationList] = useState(notifications || []);

    useEffect(() => {
        // Listen to the Echo channel for stock notifications
        const channel = window.Echo.channel('stock')
            .listen('StockNotification', (event) => {
                // Push the new notification to the list
                setNotificationList((prevNotifications) => [
                    ...prevNotifications,
                    { message: event.message },
                ]);
                // You can also use alert or Toast notifications if needed
                alert(event.message);
            });

        // Cleanup when component unmounts
        return () => {
            channel.stopListening('StockNotification');
        };
    }, []);

    return (
        <div>
            {notificationList && notificationList.map((notif, index) => (
                <div key={index} className="notification-toast">
                    {notif.message}
                </div>
            ))}
        </div>
    );
}

export default Notifications;
