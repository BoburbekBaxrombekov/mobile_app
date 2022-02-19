#TZ

1.  
    Endpoint: "/users",
    Method: "GET",
    Description: "Users ga tegishli adress va message keladi",
    Example:
    [
        {
            user_id: 1,
            adressUser: "+998901234567",
            messageUser: "Message #1"
        },
        {
            user_id: 2,
            adressUser: "+998901234567",
            messageUser: "Message #2"
        },
        {
            user_id: 3,
            adressUser: "+998901234567",
            messageUser: "Message #3"
        }
    ]
2. 
    Endpoint: "/users",
    Method: "POST",
    Description: "adressUser va messageUser kaliti ostida string jo'natasiz. Body dan.",
    Example:
    {
        adressUser: "+998901234567",
        messageUser: "Message #1"
    }
3. 
    Endpoint: "/users",
    Method: "DELETE",
    Description: "userId kaliti ostida qaysi data ni o'chirmoqchi bo'lsangiz o'sha datani user_id sini jo'natasiz.",
    Example:
    {
        userId: "1"
    }