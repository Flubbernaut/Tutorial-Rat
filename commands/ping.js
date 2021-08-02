module.exports = {
    name: 'ping',
    description: 'Ping command',
    execute(client, message, args) {
            // modifies role use
        if(message.member.roles.cache.has('871235940679577610')) {
        message.channel.send('pongers');

        } else {
            message.channel.send('Get fricked');
        }
    },
};