<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class StockNotification implements ShouldBroadcast
{
    public $message;
    public $type;

    public function __construct($message, $type)
    {
        $this->message = $message;
        $this->type = $type; 
    }

    public function broadcastOn()
    {
        return new Channel('stocks');
    }

    public function broadcastAs()
    {
        return 'stock-notification';
    }
}
